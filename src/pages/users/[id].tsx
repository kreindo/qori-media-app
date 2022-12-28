import { useRouter } from "next/router";
import { BsThreeDots } from "react-icons/bs";
import Link from "next/link";
import Layout from "../../components/layout";
import Image from "next/image";
const User = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <button className="rounded-lg px-2 py-1 text-slate-700 hover:shadow-md">
        <Link href={"/"}>👈</Link>
      </button>
      <h1>Hello there, {id}</h1>
      <div className="overflow-hidden p-5">
        <div className="flex p-4">
          {/* logo */}
          <div className="relative rounded-full ">
            <Image
              src={"github.com/kreindo.png"}
              alt={"user profile photo"}
              fill
            />
          </div>
          {/* name */}
          <p>{id}</p>
          {/* follow button with 3 dots */}
          <div className="flex">
            <button className="bg-[#AB44FC] px-4 py-2 text-white">
              Follow
            </button>
            <button>
              <BsThreeDots />
            </button>
          </div>
        </div>
        <div>{/* bio */}</div>
        <div>{/* stats */}</div>
      </div>
    </Layout>
  );
};

export default User;
