import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCottage as createEditCottageApi } from "../../services/apiCottages";
import toast from "react-hot-toast";

export function useCreateCottage() {
  const queryClient = useQueryClient();
  const { mutate: createCottage, isLoading: isCreating } = useMutation({
    mutationFn: createEditCottageApi,
    onSuccess: () => {
      toast.success("New Cottage has been created");
      queryClient.invalidateQueries({
        queryKey: ["cottages"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isCreating, createCottage };
}
