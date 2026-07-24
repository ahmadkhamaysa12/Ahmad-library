import { useMutation, useQueryClient } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';

export default function useUpdateEmail() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (NewEmail) => {

      console.log("Sending email:", {
        NewEmail,
      });

      const response = await authAxiosInstance.patch(
        '/Profile/change-email',
        {
          NewEmail,
        }
      );

      return response.data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['profile'],
      });
    },

    onError: (error) => {
      console.log(
        "Email update error:",
        error.response?.data
      );
    },
  });
}