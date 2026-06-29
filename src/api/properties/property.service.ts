import { herinoClient } from "@/api/clients/herino.client";
import { ENDPOINTS } from "@/api/endpoints";
import type { Property } from "@/types/property.types";

const getAll = async (): Promise<Property[]> => {
  const { data } = await herinoClient.get<Property[]>(
    ENDPOINTS.properties.list(),
  );
  return data;
};

const getById = async (id: string): Promise<Property> => {
  const { data } = await herinoClient.get<Property>(
    ENDPOINTS.properties.detail(id),
  );
  return data;
};

export { getAll, getById };
