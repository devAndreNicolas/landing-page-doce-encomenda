import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertLead } from "@shared/routes";

export function useCreateLead() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: InsertLead) => {
      // Validate data before sending if needed, though zod resolver handles form
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Erro de validação");
        }
        throw new Error("Falha ao registrar interesse");
      }

      return res.json();
    },
    // We don't have a list query to invalidate yet, but this is good practice
    onSuccess: () => {
      // Could trigger a toast or analytics event here
    },
  });
}
