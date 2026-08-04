import { useMutation, useQueryClient } from '@tanstack/react-query';

import authAxiosInstance from '@/api/authAxiosInstance';

export default function usePostReview() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ productId, rating, comment }) => {
      const response = await authAxiosInstance.post(
        `/Products/${productId}/reviews`,
        {
          Rating: Number(rating),
          Comment: comment.trim(),
        },
      );

      return response.data;
    },

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['book', variables.productId],
      });

      queryClient.invalidateQueries({
        queryKey: ['books'],
      });
    },

    onError: (error) => {
      console.error('Review Error:', error.response?.data || error.message);
    },
  });
}
