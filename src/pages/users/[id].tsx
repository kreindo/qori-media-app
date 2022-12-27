import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../components/layout";
const User = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <button className="rounded-lg px-2 py-1 text-slate-700 hover:shadow-md">
        <Link href={"/"}>👈</Link>
      </button>
      <h1>Hello there, {id}</h1>
    </Layout>
  );
};

export default User;
