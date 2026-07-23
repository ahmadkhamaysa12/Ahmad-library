import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import axiosInstance from '@/api/axiosInstance';

export default function useBook(id) {
  const { i18n } = useTranslation();

  const getBook = async () => {
    const response = await axiosInstance.get(`/Products/${id}`);
    return response.data.response;
  };

  return useQuery({
    queryKey: ['book', i18n.language, id],
    queryFn: getBook,
    enabled: !!id,
    staleTime: 1000 * 60 * 2,
  });
}
