import { BsThreeDots } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import Layout from "../../components/layout";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { signOut } from "next-auth/react";

const isVerified = true;
const User = () => {
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };
  const { data: session } = useSession();
  if (!session) {
    return <div>login first</div>;
  }
  return (
    <Layout>
      <div className="overflow-h, nameden rounded-xl bg-white p-3 shadow-md">
        <div className="flex justify-between p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="relative flex h-16 w-16 rounded-full bg-gray-200">
              <Image
                className="rounded-full"
                src={session?.user?.image || ""}
                alt={"user profile photo"}
                fill
              />
            </div>
            <div className="flex flex-col">
              <p className="flex items-center justify-center gap-1 text-[16px] font-semibold">
                {session?.user?.name}
                {isVerified ? (
                  <span>
                    <MdVerified size={14} color={"#3870FF"} />
                  </span>
                ) : (
                  <></>
                )}
              </p>
              <p className="text-[12px]">Male{/** gender here */}</p>
            </div>
          </div>
          {/* follow button with 3 dots */}
          <div className="relative flex items-center justify-center gap-2">
            {!session ? (
              <button className="rounded-sm bg-[#AB44FC] px-6 py-1 text-sm font-light text-white">
                Follow
              </button>
            ) : (
              <></>
            )}
            <button onClick={handleClick}>
              <BsThreeDots size={24} />
            </button>
            {menu ? (
              <div className="absolute top-10 right-5 rounded-xl border bg-white">
                <ul className="flex flex-col items-center justify-center">
                  <li className="px-4 py-2">Kill</li>
                  <li className="w-full border-b"></li>
                  <li className="px-4 py-2">Suffer</li>
                  <li className="w-full border-b"></li>
                  <li className="whitespace-nowrap px-8 py-2">
                    <button
                      className="text-red-500"
                      onClick={() => {
                        signOut();
                      }}
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <></>
            )}
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
          <div className="flex flex-col items-center justify-center text-sm">
            Post <span className="text-xl font-bold">73</span>
          </div>
          <div className="flex flex-col items-center justify-center text-sm">
            Followers <span className="text-xl font-bold">2.3k</span>
          </div>
          <div className="flex flex-col items-center justify-center text-sm">
            Following <span className="text-xl font-bold">104</span>
          </div>
        </div>
        <div className="p-4" />
      </div>
    </Layout>
  );
};

export default User;
