import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import axiosInstance from '@/api/axiosInstance';

export default function useBooks() {
  const { i18n } = useTranslation();
  const fetchBooks = async () => {
    const response = await axiosInstance.get(`/Products`);
    return response.data.response.data;
  };
  return useQuery({
    queryKey: ['books', i18n.language],
    queryFn: fetchBooks,
    staleTime: 1000 * 60 * 5,
  });
}
