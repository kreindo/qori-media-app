import { MdHome, MdSearch } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
export default function BottomNavbar() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <div className="fixed bottom-0 flex h-16 w-full max-w-md items-center justify-between overflow-hidden border-t border-gray-200 bg-white">
        <div className="flex w-full items-center justify-between px-10 py-5">
          <Link href={"/"}>
            <MdHome size={24} />
          </Link>
          <Link href={"/search"}>
            <MdSearch size={24} />
          </Link>
          <Link
            href={`${id !== undefined ? `/users/${id}` : `/users/NO_USER`}`}
          >
            <FaUserCircle size={24} />
          </Link>
        </div>
      </div>
    </>
  );
}
