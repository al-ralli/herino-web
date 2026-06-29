import { useQuery } from "@tanstack/react-query";
import { getAll } from "@/api/properties/property.service";

export const usePropertiesQuery = () => {
  return useQuery({
    queryKey: ["properties"],
    queryFn: getAll,
  });
};
