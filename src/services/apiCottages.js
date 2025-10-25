import supabase, { supabaseUrl } from "./supabase";
export async function getCottages() {
  const { data, error } = await supabase.from("cottages").select("*");
  if (error) {
    console.error(error);
    throw new Error("Cottages can not be loaded");
  }

  return data;
}
export async function createEditCottage(newCottage, id) {
  console.log(newCottage, id);
  const hasImagePath = newCottage.image?.startsWith?.(supabaseUrl);
  const imageName = `${Math.random()}-${newCottage.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCottage.image
    : `${supabaseUrl}/storage/v1/object/public/cottage-images/${imageName}`;
  //https://fkrhlogbooyfxhqneiyb.supabase.co/storage/v1/object/public/cottage-images/cottage-001.jpg
  // 1 Create a new/Edit cottage
  let query = supabase.from("cottages");
  // Create a new Cottage
  if (!id) query = query.insert([{ ...newCottage, image: imagePath }]);
  // Edit or Update
  if (id)
    query = query.update({ ...newCottage, image: imagePath }).eq("id", id);
  const { data, error } = await query.select().single();
  if (error) {
    console.error(error);
    throw new Error("Cottage can not be created");
  }
  // 2 Upload cottage Image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cottage-images")
    .upload(imageName, newCottage.image);
  // 3 Undo cottage creation if image did not upload

  if (storageError) {
    await supabase.from("cottages").delete().eq("id", data.id);
  }
  return data;
}
export async function deleteCottage(id) {
  const { data, error } = await supabase.from("cottages").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cottages can not be deleted");
  }

  return data;
}
