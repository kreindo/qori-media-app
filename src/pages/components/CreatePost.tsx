import { useState } from "react";
import { object, string } from "zod";
import { trpc } from "../../utils/trpc";

export const postSchema = object({
  text: string({
    required_error: "Post text is required",
  })
    .min(10)
    .max(280),
});

export function CreatePost() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const { mutateAsync } = trpc.post.create.useMutation();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await postSchema.parse({ text });
    } catch (e) {
      setError(e.message);
      return;
    }
    if (text.length < 10) {
      setError("Post must be at least 10 characters long");
      return;
    }

    mutateAsync({ text });
  }
  return (
    <>
      {error && JSON.stringify(error)}
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <div>
          <button type="submit">Post</button>
        </div>
      </form>
    </>
  );
}
