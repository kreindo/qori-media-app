import { useForm } from "react-hook-form";

export default function StatusUpdateForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: object) => {
    console.log(data);
    console.log(register);
    // Send the status update to the server, etc.
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="status" className="mb-2 block font-bold text-gray-700">
        What&apos;s on your mind?
      </label>
      <textarea
        name="status"
        // ref={register({ required: true })}
        className="form-input focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
        placeholder="Write your update here..."
      />
      {/* {errors.status && (
        <p className="mt-4 text-xs italic text-red-500">
          Please enter a status update
        </p>
      )} */}
      <button
        type="submit"
        className="focus:shadow-outline mt-4 rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
      >
        Post Update
      </button>
    </form>
  );
}
