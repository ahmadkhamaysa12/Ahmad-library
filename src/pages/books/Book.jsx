
import BookMainPart from "@/components/forBook/BookMainPart";
import { useParams } from "react-router-dom";

export default function Book() {
  const { id } = useParams();
  
  return <BookMainPart id={id}/>;
}
