interface PostProps {
  id: number;
  title: string;
  body: string;
}

function Post({ id, title, body }: PostProps) {
  return (
    <div className="rounded border-2 p-4">
      <h3 className="mb-4 bold">
        <span>{id}. </span>
        {title}
      </h3>
      <div>{body}</div>
    </div>
  );
}

export { Post };
