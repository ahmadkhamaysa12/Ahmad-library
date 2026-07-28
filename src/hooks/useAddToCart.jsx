import { useMutation, useQueryClient } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';

export default function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ ProductId, count }) => {
      // Changed 'Count' to 'count'
      const response = await authAxiosInstance.post('/Carts', {
        ProductId, // Assuming ProductId is still capitalized as per API
        count,
      });

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
    },
  });
}
