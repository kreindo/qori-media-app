import React from "react";
import Post from "../post/post";
import { type PostType as PT } from "../post/post";

const Feed = ({ posts }: { posts?: PT[] }): JSX.Element => {
  return (
    <ul className="grid gap-4">
      {posts?.map((post: PT) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
};

export default Feed;
