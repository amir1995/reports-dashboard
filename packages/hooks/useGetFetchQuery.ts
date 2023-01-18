import { useQueryClient } from '@tanstack/react-query';

export function useGetFetchQuery<T>(name): T {
  const queryClient = useQueryClient();

  return queryClient.getQueryData(name);
}
