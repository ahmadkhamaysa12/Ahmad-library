import useBook from "@/hooks/useBook";
import { useParams } from "react-router-dom";

export default function BookMainPart() {
  const { id } = useParams();
  const {data :book,isLoading,error}=useBook(id);
  console.log(book);
  return <div>bookmain part</div>;
}
