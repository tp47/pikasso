import { useGetPostByIdQuery } from "@/shared/api";
import { Post } from "@/entities";
import { Link } from "@/shared/ui";

interface PostProps {
  id: string;
}

function PostCard({ id }: PostProps) {
  const { data, error, isLoading } = useGetPostByIdQuery(id);

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <Post id={data.id} title={data.title} body={data.body} />
        </>
      ) : null}
      <Link to="/">Back home</Link>
    </div>
  );
}

export { PostCard };
