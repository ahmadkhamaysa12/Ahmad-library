import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import authAxiosInstance from '../api/authAxiosInstance'; // Corrected import name

export default function useProfile() {
  const { i18n } = useTranslation();
  return useQuery({
    queryKey: ['profile', i18n.language], // Added i18n.language to queryKey for language-specific caching
    queryFn: async () => {
      // Changed authinstance to authAxiosInstance
      const response = await authAxiosInstance.get(`/Profile`);
      return response.data;
    },
    staleTime: 1000 * 60 * 5,
  });
}
