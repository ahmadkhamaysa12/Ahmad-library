import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import axiosInstance from '@/api/axiosInstance';

export default function useCategories() {
  const { i18n } = useTranslation();
  const useCategories = async () => {
    const response = await axiosInstance.get(`/Categories`);
    return response.data.response.data;
  };
  return useQuery({
    queryKey: ['categories', i18n.language],
    queryFn: useCategories,
    staleTime: 1000 * 60 * 5,
  });
}
