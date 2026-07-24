import { useMutation, useQueryClient } from '@tanstack/react-query';
import authinstance from '../api/authAxiosInstance';

export default function useUpdateEmail() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => authinstance.patch(`/Profile/change-email`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
    onError: (error) => {
      console.error('Failed to update email', error);
    },
  });
}
