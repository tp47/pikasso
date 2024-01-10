import { PostCard } from "@/widgets";
import { useParams } from "react-router-dom";

function PostPage() {
  const { postId } = useParams();

  return <PostCard id={postId as string} />;
}

export { PostPage };
