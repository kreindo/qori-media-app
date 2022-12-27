import React from "react";
import Post from "../post/post";
import { type PostType } from "../post/post";

const Feed = ({ posts }: { posts: PostType[] }) => {
  return (
    <ul className="grid gap-4">
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
};

export default Feed;
