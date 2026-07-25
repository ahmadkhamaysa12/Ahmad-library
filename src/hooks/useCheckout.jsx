import { useMutation, useQueryClient } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';

export default function useCheckout() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (PaymentMethod) => {
      return await authAxiosInstance.post(`/Checkouts`, { PaymentMethod });
    },
    onSuccess: (response) => {
      if (response.data.url) {
        location.href = response.data.url;
      }
      queryClient.invalidateQueries({
        queryKey: ['cart'],
      });
    },
  });
}
