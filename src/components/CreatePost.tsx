import { useState } from "react";
import { object, string } from "zod";
import { api } from "~/utils/api";

export const postSchema = object({
  text: string({
    required_error: "Post text is required",
  })
    .min(10)
    .max(280),
});

export default function CreatePost() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const { mutateAsync } = api.post.create.useMutation();
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await postSchema.parse({ text });
    } catch (e: any) {
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
      <div className="mb-4 rounded-xl bg-white p-5 shadow-lg">
        <form className="flex w-full flex-col gap-4" onSubmit={handleSubmit}>
          <textarea
            className="rounded-sm border"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <div>
            <button
              className="rounded-md bg-slate-800 px-6 py-1 text-white hover:bg-slate-500"
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
