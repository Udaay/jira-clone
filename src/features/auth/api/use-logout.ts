import { useMutation } from "@tanstack/react-query";
import {client} from "@/lib/rpc";

export const useLogout = () => {
  const mutation = useMutation({
    mutationFn: async () => {
      const response = await client.api.auth.logout.$post();
      if (!response.ok) {
        return null
      }

      return response.json();
      
    }
  })

  return mutation
}