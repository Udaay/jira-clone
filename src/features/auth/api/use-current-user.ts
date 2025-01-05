import { useQuery } from "@tanstack/react-query";
import { client } from "@/lib/rpc";

export const useCurrentUser = () =>  {

  const query = useQuery({
    queryKey: ['current-user'],
    queryFn: async () => {
      const response = await client.api.auth.currentUser.$get();
      if(!response.ok) return null;

      const user = await response.json();
      return user;
    }
  })

  return query;

}    