import { type NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";
import Timeline from "../components/Timeline";
import { Montserrat } from "next/font/google";
import { useSession } from "next-auth/react";

const montserrat = Montserrat({ preload: false });
const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
        <style jsx global>{`
          html {
            font-family: ${montserrat};
          }
        `}</style>
      </Head>
      <Layout className="font-[montserrat]">
        <main className="font-[montserrat]">
          <>
            {session == null ? (
              <></>
            ) : (
              <div className="mb-4 overflow-hidden rounded-lg bg-white p-4 text-xs shadow-lg">
                <p className="font-semibold">
                  Hello there {session?.user?.name}
                </p>
              </div>
            )}
          </>
          <Timeline />
        </main>
      </Layout>
    </>
  );
};

export async function getServerSideProps() {
  const posts = [
    {
      id: 1,
      image: "https://picsum.photos/1080/200?random=1",
      caption: "A beautiful sunset",
      user: {
        username: "jane_doe",
        name: "Jane Doe",
        profileImage: "https://github.com/markuss.png",
      },
    },
    {
      id: 2,
      image: "https://picsum.photos/1080/200?random=4",
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
