import React from "react";
import Post from "../post/post";

export type Post = {
  id: number;
  image: string;
  caption: string;
  user: {
    username: string;
    name: string;
    profileImage: string;
  };
};

const Feed = ({ posts }: { posts: Post[] }) => {
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
