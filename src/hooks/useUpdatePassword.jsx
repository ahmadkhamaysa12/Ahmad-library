import { useMutation, useQueryClient } from '@tanstack/react-query';
import authAxiosInstance from '../api/authAxiosInstance';

export default function useUpdatePassword() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) =>
      authAxiosInstance.patch('/Profile/change-password', {
        CurrentPassword: data.CurrentPassword,
        NewPassword: data.NewPassword,
        ConfirmNewPassword: data.ConfirmNewPassword,
      }),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['profile'],
      });
    },

    onError: (error) => {
      console.error(
        'Failed to update password:',
        error.response?.data
      );
    },
  });
}