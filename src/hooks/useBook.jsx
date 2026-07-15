import { useQuery } from '@tanstack/react-query';
import instance from '../api/axiosInstance';

export default function useBook(id) {
  const getBook = async () => {
    const response = await instance.get(`/Products/${id}`);
    return response.data.response;
  };

  return useQuery({
    queryKey: ['book', id],
    queryFn: getBook,
    enabled: !!id,
    staleTime: 1000 * 60 * 2,
  });
}