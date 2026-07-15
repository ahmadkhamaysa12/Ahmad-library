import { useParams } from 'react-router-dom';
import AllBooks from '@/components/forBooks/AllBooks';

export default function Books() {
  const { id } = useParams();

  return <AllBooks categoryId={id} />;
} 