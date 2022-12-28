import { useEffect, useState } from "react";
import Post from "../post/post";
import { trpc } from "../../utils/trpc";

// import { type PostType as PT } from "../post/post";

function useScrollPos() {
  const [scrollPos, setScrollPos] = useState<number | undefined>();

  function handleScroll() {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const scrolled = (winScroll / height) * 100;

    setScrollPos(scrolled);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return scrollPos;
}

const Feed = (): JSX.Element => {
  const sp: number = useScrollPos();
  const { data, hasNextPage, fetchNextPage, isFetching } =
    trpc.post.timeline.useInfiniteQuery(
      {
        limit: 10,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      }
    );

  const posts = data?.pages.flatMap((page) => page.posts) ?? [];

  useEffect(() => {
    if (sp > 90 && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [sp, hasNextPage, isFetching, fetchNextPage]);

  return (
    <ul className="grid gap-4">
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}

      {!hasNextPage && (
        <p className="mb-20 rounded-md bg-white p-4 text-center text-sm text-gray-400 shadow-md">{`No more item :(`}</p>
      )}
    </ul>
  );
};

export default Feed;
