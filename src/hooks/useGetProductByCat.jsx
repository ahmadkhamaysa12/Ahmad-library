import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import instance from '../api/axiosInstance';

export default function useGetBooksByCat(id) {
  const { i18n } = useTranslation();

  const useGetBooksByCat = async () => {
    const response = await instance.get(`/Products/category/${id}`);
    return response.data;
  };

  return useQuery({
    queryKey: ['books', 'category', id, i18n.language],
    queryFn: useGetBooksByCat,
    enabled: !!id,
    staleTime: 1000 * 60 * 2,
  });
}