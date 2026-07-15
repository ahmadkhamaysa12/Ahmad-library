import { useMutation, useQueryClient } from '@tanstack/react-query';
import authinstance from '../api/authAxiosInstance';

export default function useClearCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await authinstance.delete('/Carts/clear');
      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
    },

    onError: (error) => {
      console.error('Failed to clear cart', error);
    },
  });
}
