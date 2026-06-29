import { herinoClient } from "@/api/clients/herino.client";
import { ENDPOINTS } from "@/api/endpoints";
import type { Surveillance } from "@/types/surveillance.types";

const getAll = async (): Promise<Surveillance[]> => {
  const { data } = await herinoClient.get<Surveillance[]>(
    ENDPOINTS.surveillances.list(),
  );
  return data;
};

const getById = async (id: string): Promise<Surveillance> => {
  const { data } = await herinoClient.get<Surveillance>(
    ENDPOINTS.surveillances.detail(id),
  );
  return data;
};

export { getAll, getById };
