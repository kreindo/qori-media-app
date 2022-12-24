import Link from "next/link";
import { Icon } from "@blueprintjs/core";
import { signIn, signOut, useSession } from "next-auth/react";

export const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav className="flex items-center justify-between bg-gray-800 py-4 px-6">
      <Link
        href="/"
        className="flex items-center justify-center gap-1 text-xl font-bold text-white"
      >
        <span>
          <Icon icon="book" color="white" />
        </span>
        Qori Media
      </Link>
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            signIn();
          }}
          className="rounded-lg px-4 py-2 text-white hover:bg-gray-700"
        >
          <Icon icon="user" color="white" />
        </button>
        <Link
          href="/profile"
          className="rounded-lg px-4 py-2 text-white hover:bg-gray-700"
        >
          <Icon icon="user" color="white" />
        </Link>
        <Link
          href="/settings"
          className="rounded-lg px-4 py-2 text-white hover:bg-gray-700"
        >
          <Icon icon="cog" color="white" />
        </Link>
      </div>
    </nav>
  );
};
