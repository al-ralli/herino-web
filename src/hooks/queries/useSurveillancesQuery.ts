import { useQuery } from "@tanstack/react-query";
import { getAll } from "@/api/surveillances/surveillance.service";

export const useSurveillancesQuery = () => {
  return useQuery({
    queryKey: ["surveillances"],
    queryFn: getAll,
  });
};
