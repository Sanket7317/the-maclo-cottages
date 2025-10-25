import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCottage } from "../../services/apiCottages";
import toast from "react-hot-toast";
export function useEditCottage() {
  const queryClient = useQueryClient();
  const { mutate: editCottage, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCottageData, id }) =>
      createEditCottage(newCottageData, id),
    onSuccess: () => {
      toast.success("Cottage has been updated");
      queryClient.invalidateQueries({
        queryKey: ["cottages"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editCottage };
}
