import { type NextPage } from "next";
import Head from "next/head";
import Layout from "./components/layout";
import Feed from "./components/feed/feed";
import { trpc } from "../utils/trpc";

const Home: NextPage = ({ posts }: any) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <Feed posts={posts} />
        </main>
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  const posts = [
    {
      id: 1,
      image: "https://picsum.photos/200/300?random=1",
      caption: "A beautiful sunset",
      user: {
        username: "jane_doe",
        name: "Jane Doe",
        profileImage: "https://github.com/jane.png",
      },
    },
    {
      id: 2,
      image: "https://picsum.photos/200/300?random=2",
      caption: "A cute puppy",
      user: {
        username: "john_smith",
        name: "John Smith",
        profileImage: "https://github.com/kreindo.png",
      },
    },
    // ...
  ];

  return {
    props: {
      posts,
    },
  };
}

export default Home;
