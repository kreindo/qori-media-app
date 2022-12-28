import { RouterOutputs, trpc } from "../utils/trpc";
import Image from "next/image";
import CreatePost from "./CreatePost";

function Post({
  post,
}: {
  post: RouterOutputs["post"]["timeline"]["posts"][number];
}) {
  return (
    <div>
      <div>
        {post.author.image && (
          <Image
            src={post.author.image}
            alt={`${post.author.name} Profile picture`}
            width={48}
            height={48}
            className="rounded-full"
          />
        )}
      </div>
    </div>
  );
}

export default function Timeline() {
  // const { data } = trpc.post.timeline.useQuery({
  //   limit: 2,
  // });

  return (
    <div>
      <CreatePost />
      {/* 
      {JSON.stringify(data)}

      {data?.posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })} */}
    </div>
  );
}
