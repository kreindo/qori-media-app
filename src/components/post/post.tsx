import Link from "next/link";
import Image from "next/image";
import React from "react";

export type PostType = {
  id: number;
  image: string;
  caption: string;
  user: {
    username: string;
    name: string;
    profileImage: string;
  };
};

const postStatus = {
  liked: false,
  saved: false,
  comment: "",
};

const Post = ({ post }: { post: PostType }) => {
  const [liked, setLiked] = React.useState(postStatus.liked);
  const [saved, setSaved] = React.useState(postStatus.saved);
  const [comment, setComment] = React.useState(postStatus.comment);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleComment = () => {
    setComment(comment);
  };
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="mb-2 flex items-center px-4 py-4">
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
      <div className="relative h-20">
        <Image fill src={post.image} alt={post.caption} className="w-full" />
      </div>
      <div className="px-6 py-4">
        <h1 className="font-bold">Description</h1>
        <p className="mb-4 text-sm text-gray-700">{post.caption}</p>
      </div>
      <div className="flex justify-between px-14 py-6">
        <button
          className="flex items-center gap-1 text-gray-700"
          onClick={handleLike}
        >
          <div className="h-5 w-5">
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 9C22 8.46957 21.7893 7.96086 21.4142 7.58579C21.0391 7.21071 20.5304 7 20 7H13.68L14.64 2.43C14.66 2.33 14.67 2.22 14.67 2.11C14.67 1.7 14.5 1.32 14.23 1.05L13.17 0L6.59 6.58C6.22 6.95 6 7.45 6 8V18C6 18.5304 6.21071 19.0391 6.58579 19.4142C6.96086 19.7893 7.46957 20 8 20H17C17.83 20 18.54 19.5 18.84 18.78L21.86 11.73C21.95 11.5 22 11.26 22 11V9ZM0 20H4V8H0V20Z"
                fill={liked ? `#0047FF` : `#B0B0B0`}
              />
            </svg>
          </div>
        </button>
        <button
          className="flex items-center gap-1 text-gray-700"
          onClick={handleComment}
        >
          <div className="h-5 w-5">
            <svg
              width="21"
              height="19"
              viewBox="0 0 21 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.215 18.6878L16.8 16.3391H2.1C1.5225 16.3391 1.0283 16.1392 0.6174 15.7396C0.2058 15.3393 0 14.8583 0 14.2967V2.04238C0 1.48073 0.2058 0.999746 0.6174 0.599439C1.0283 0.199813 1.5225 0 2.1 0H18.9C19.4775 0 19.972 0.199813 20.3836 0.599439C20.7945 0.999746 21 1.48073 21 2.04238V17.9474C21 18.407 20.7858 18.7259 20.3574 18.9043C19.9283 19.0833 19.5475 19.0112 19.215 18.6878Z"
                fill="#B0B0B0"
              />
            </svg>
          </div>
        </button>
        <button
          className="flex items-center gap-1 text-gray-700"
          onClick={handleSave}
        >
          <div className="h-5 w-5">
            <svg
              width="15"
              height="18"
              viewBox="0 0 15 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 18V2C0 1.45 0.21 0.979 0.63 0.587C1.04929 0.195667 1.55357 0 2.14286 0H12.8571C13.4464 0 13.9511 0.195667 14.3711 0.587C14.7904 0.979 15 1.45 15 2V18L7.5 15L0 18Z"
                fill={`${saved ? "#AB44FC" : "#B0B0B0"}`}
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Post;
