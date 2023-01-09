import Link from "next/link";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { FaSearch, FaArrowLeft } from "react-icons/fa";

const SearchBar: React.FC = () => {
  const [form, setForm] = useState("");
  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between gap-5 py-1">
        <Link href={"/"}>
          <FaArrowLeft color="#787878" />
        </Link>
        <div className="jutsify-start flex w-full items-center gap-5 rounded-md bg-[#D9D9D9] p-4">
          <form
            onSubmit={handleSubmit}
            className="flex w-full items-center justify-between gap-5 text-[#787878]"
          >
            <FaSearch color="#787878" />
            <input
              type="text"
              onChange={handleFormChange}
              placeholder="Search by typing..."
              className="w-full rounded-md bg-[#D9D9D9] text-[#787878] outline-none placeholder:text-xs placeholder:text-[#787878]"
            />
          </form>
        </div>
      </div>
      <p className="text-black">{form} test</p>
    </div>
  );
};

export default SearchBar;
