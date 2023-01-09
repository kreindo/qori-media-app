import { type NextPage } from "next";
import SearchBar from "../components/search-bar/searchbar";
import Layout from "../components/layout";
import { FaSearch } from "react-icons/fa";
import { faker } from "@faker-js/faker";

const MostSearched = () => {
  const createList = () => {
    return faker.hacker.verb();
  };
  const list = Array.from({ length: 25 }, createList);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <p className="font-semibold">Most Searched</p>
        <p className="text-xs font-semibold text-purple-500 underline">
          History
        </p>
      </div>
      <div className="grid grid-flow-row grid-cols-3 gap-2">
        {list?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-between rounded-md bg-[#7a7a7a] p-3 capitalize"
            >
              <FaSearch /> {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Search: NextPage = () => {
  return (
    <Layout>
      <div className="text-sm">
        <SearchBar />
        <MostSearched />
      </div>
    </Layout>
  );
};

export default Search;
