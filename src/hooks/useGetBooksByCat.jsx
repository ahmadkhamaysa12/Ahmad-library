import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import instance from '../api/axiosInstance';

export default function useGetBooksByCat(id) {
  const { i18n } = useTranslation();

  const fetchBooksByCat = async () => {
    const response = await instance.get(`/Products/category/${id}`); // Removed console.log

    return (
      response.data?.response?.data ??
      response.data?.data ??
      response.data ??
      []
    );
  };

  return useQuery({
    queryKey: ['books', 'category', id, i18n.language],

    queryFn: fetchBooksByCat,

    enabled: Boolean(id),

    staleTime: 1000 * 60 * 2,
  });
}
