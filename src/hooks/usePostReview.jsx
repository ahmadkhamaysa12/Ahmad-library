import { useMutation, useQueryClient } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';

export default function usePostReview() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ productId, rating, comment }) => {
      const response = await authAxiosInstance.post(
        `/Products/${productId}/reviews`,
        {
          Rating: Number(rating),
          Comment: comment,
        },
      );

      return response.data;
    },

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['book', variables.productId],
      });
    },

    onError: (error) => {
      console.log('STATUS:', error.response?.status);
      console.log('DATA:', error.response?.data);
    },
  });
}
