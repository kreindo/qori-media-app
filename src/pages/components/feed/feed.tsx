import Post from "../post/post";

const Feed = ({ posts }: { posts: any }) => {
  return (
    <ul className="grid gap-4">
      {posts.map((post: { id: string }) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
};

export default Feed;
