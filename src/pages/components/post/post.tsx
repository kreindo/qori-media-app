import Link from "next/link";
import Image from "next/image";
import React from "react";

type PostType = {
  image: string;
  caption: string;
  user: {
    profileImage: string;
    name: string;
    username: string;
  };
};

const Post = ({ post }: { post: PostType }) => {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="relative h-20">
        <Image fill src={post.image} alt={post.caption} className="w-full" />
      </div>
      <div className="px-6 py-4">
        <div className="mb-2 flex items-center">
          <Link href={`/users/${post.user.username}`}>
            <p>
              <Image
                width={300}
                height={300}
                src={post.user.profileImage}
                alt={post.user.name}
                className="mr-2 h-10 w-10 rounded-full"
              />
            </p>
          </Link>
          <div className="text-sm font-bold leading-none">
            <Link href={`/users/${post.user.username}`}>
              <p className="text-gray-900 hover:text-gray-700">
                {post.user.name}
              </p>
            </Link>
          </div>
        </div>
        <p className="mb-4 text-sm text-gray-700">{post.caption}</p>
      </div>
    </div>
  );
};

export default Post;
