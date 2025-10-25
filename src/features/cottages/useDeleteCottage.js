import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCottage as deleteCottageApi } from "../../services/apiCottages";
import toast from "react-hot-toast";

export function useDeleteCottage() {
  const queryClient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteCottage } = useMutation({
    mutationFn: deleteCottageApi,
    onSuccess: () => {
      toast.success("Cottage Deleted Successfully");
      queryClient.invalidateQueries({
        queryKey: ["cottages"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteCottage };
}
