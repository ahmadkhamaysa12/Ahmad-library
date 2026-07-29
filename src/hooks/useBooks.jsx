import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';
import axiosInstance from '@/api/axiosInstance';

export default function useBooks({
  categoryId,
  sortBy,
  minPrice,
  maxPrice,
  search,
  ascending,
} = {}) {
  const { i18n } = useTranslation();

  const fetchBooks = async () => {
    const response = await axiosInstance.get('/Products', {
      params: {
        categoryId,
        sortBy,
        minPrice,
        maxPrice,
        search,
        ascending,
        lang: i18n.language,
      },
    });

    return response.data.response.data;
  };

  return useQuery({
    queryKey: [
      'books',
      i18n.language,
      categoryId,
      sortBy,
      minPrice,
      maxPrice,
      search,
      ascending,
    ],
    queryFn: fetchBooks,
    staleTime: 1000 * 60 * 5,
  });
}