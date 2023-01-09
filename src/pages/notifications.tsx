import { type NextPage } from "next";
import Layout from "../components/layout";

const Notifications: NextPage = () => {
  return (
    <Layout>
      {/* settings page */}
      <div className="p-5">
        <div className="flex flex-col rounded-2xl bg-white px-10 py-5">
          <p className="flex justify-center pb-10 text-sm font-semibold">
            Notifications
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Notifications;
