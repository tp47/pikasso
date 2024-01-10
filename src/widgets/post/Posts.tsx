import { useState } from "react";
import {
  FixedSizeList as List,
  ListChildComponentProps,
  ListOnItemsRenderedProps,
} from "react-window";
import { useGetAllPostsQuery } from "@/shared/api";
import { Link } from "@/shared/ui";
import { Post } from "@/entities";

function Posts() {
  const [page, setPage] = useState(1);
  const { data, error, isLoading, isFetching } = useGetAllPostsQuery(page);

  function Row({ index, style }: ListChildComponentProps) {
    if (data === undefined) {
      return;
    }

    const { id, title, body } = data[index];
    return (
      <div key={id} className="mb-10" style={style}>
        <Post id={id} title={title} body={body} />
        <Link to={`post/${id}`}>Просмотр</Link>
      </div>
    );
  }

  function onItemsRendered({ overscanStopIndex }: ListOnItemsRenderedProps) {
    if (data === undefined) {
      return;
    }

    if (overscanStopIndex >= data.length - 1 && !isFetching) {
      setPage((previous) => previous + 1);
    }
  }

  return (
    <div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <List
            height={window.innerHeight}
            width={window.innerWidth}
            itemCount={data.length}
            itemSize={200}
            onItemsRendered={onItemsRendered}
          >
            {Row}
          </List>
        </>
      ) : null}
    </div>
  );
}

export { Posts };
