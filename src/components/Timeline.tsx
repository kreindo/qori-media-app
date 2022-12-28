import CreatePost from "./CreatePost";
import Feed from "./feed/feed";

export default function Timeline() {
  return (
    <div>
      <CreatePost />
      <Feed />
    </div>
  );
}
