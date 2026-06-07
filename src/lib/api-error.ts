import axios from "axios";
import type { ApiErrorResponse } from "@/types/api.types";

export function getApiErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as ApiErrorResponse | undefined;

    if (!data) return "Une erreur réseau est survenue.";

    if (Array.isArray(data.message)) {
      return data.message[0];
    }

    const messages: Record<string, string> = {
      "Email déjà utilisé": "Cet email est déjà utilisé.",
      Unauthorized: "Email ou mot de passe incorrect.",
      Forbidden: "Accès non autorisé.",
    };

    return messages[data.message] ?? data.message ?? "Une erreur est survenue.";
  }

  return "Une erreur inattendue est survenue.";
}
