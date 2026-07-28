import { useMutation, useQueryClient } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance'; // Corrected import name

export default function useClearCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await authAxiosInstance.delete('/Carts/clear'); // Changed authinstance to authAxiosInstance
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
