import { useQuery } from "@tanstack/react-query";
import { getCottages } from "../../services/apiCottages";

export function useCottages() {
  const {
    isLoading,
    data: cottages,
    error,
  } = useQuery({
    queryKey: ["cottages"],
    queryFn: getCottages,
  });
  return { isLoading, cottages, error };
}
