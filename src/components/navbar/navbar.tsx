import Link from "next/link";
import { HiCog, HiUserAdd, HiUserRemove } from "react-icons/hi";
import { BsBellFill } from "react-icons/bs";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav className="flex items-center justify-between bg-[white] py-4 px-6">
      <Link
        href="/"
        className="flex items-center justify-center gap-1 font-[montserrat] text-sm font-bold text-slate-800"
      >
        Qori Media
      </Link>
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            {
              session == null ? signIn() : signOut();
            }
          }}
          className="rounded-lg px-4 py-2 hover:bg-gray-300"
        >
          {session == null ? (
            <div className="flex items-center gap-1">
              <span>
                <HiUserAdd color="black" />
              </span>
              <p>sign in</p>
            </div>
          ) : (
            <HiUserRemove color="black" />
          )}
        </button>
        <Link
          href="/profile"
          className="rounded-lg px-4 py-2 hover:bg-gray-300"
        >
          <BsBellFill color="black" />
        </Link>
        <Link
          href="/settings"
          className="rounded-lg px-4 py-2 hover:bg-gray-300"
        >
          <HiCog color="black" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;