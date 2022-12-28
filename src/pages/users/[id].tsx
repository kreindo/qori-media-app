import { useRouter } from "next/router";
import { BsThreeDots } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import Link from "next/link";
import Layout from "../../components/layout";
import Image from "next/image";

const isVerified = true;
const User = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <button className="rounded-lg px-2 py-1 text-slate-700 hover:shadow-md">
        <Link href={"/"}>👈</Link>
      </button>
      <h1>Hello there, {id}</h1>
      <div className="overflow-hidden rounded-xl bg-white p-3 shadow-md">
        <div className="flex justify-between p-4">
          {/* logo */}
          <div className="flex items-center justify-between gap-4">
            <div className="relative flex h-16 w-16 rounded-full bg-gray-200">
              <Image
                className="rounded-full"
                src={"https://github.com/kreindo.png"}
                alt={"user profile photo"}
                fill
              />
            </div>
            <div className="flex flex-col">
              <p className="flex items-center justify-center gap-1 text-[16px] font-semibold">
                {id}
                {isVerified ? (
                  <span>
                    <MdVerified size={14} color={"#3870FF"} />
                  </span>
                ) : (
                  <></>
                )}
              </p>
              <p className="text-[12px]">Girl{/** gender here */}</p>
            </div>
          </div>
          {/* follow button with 3 dots */}
          <div className="flex items-center justify-center gap-2">
            <button className="rounded-sm bg-[#AB44FC] px-6 py-1 font-light text-white">
              Follow
            </button>
            <button>
              <BsThreeDots size={24} />
            </button>
          </div>
        </div>
        <div>
          <p className="px-5 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            aspernatur vitae error neque ullam! Sequi temporibus ipsa illo
            quidem molestiae.
          </p>
        </div>
        <div className="p-4" />
        <div className="flex justify-between border-t border-b px-8 py-5">
          <div className="flex flex-col items-center justify-center">
            Post <span className="text-md font-bold">73</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            Followers <span className="text-md font-bold">2.3k</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            Following <span className="text-md font-bold">104</span>
          </div>
        </div>
        <div className="p-4" />
      </div>
    </Layout>
  );
};

export default User;
