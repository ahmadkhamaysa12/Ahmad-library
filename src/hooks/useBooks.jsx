import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import axiosInstance from '../api/axiosInstance';

export default function useBooks() {
  const { i18n } = useTranslation();
  const useBooks = async () => {
    const response = await axiosInstance.get(`/Products`);
    return response.data.response.data;
  };
  return useQuery({
    queryKey: ['products', i18n.language],
    queryFn: useBooks,
    staleTime: 1000 * 60 * 5,
  });
}
