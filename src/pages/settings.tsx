import { type NextPage } from "next";
import { FaLock } from "react-icons/fa";
import Layout from "../components/layout";
const Settings: NextPage = () => {
  const isPremium = true;
  return (
    <Layout>
      {/* settings page */}
      <div className="p-5">
        <div className="flex flex-col rounded-2xl bg-white px-10 py-5">
          <p className="flex justify-center pb-5 font-semibold">Settings</p>
          <div className="flex w-full flex-col items-start">
            <p className="pb-4 font-semibold">Account</p>
            <div className="py-2">
              <p className="py-1">Edit Profile</p>
              <p className="py-1">Change Password</p>
              <p className="py-1">Two-Factor Authentication</p>
            </div>
            <p className="pb-4 font-semibold">System</p>
            <div className="w-full py-2">
              <p className="py-1 text-purple-500">Upgrade to Pro</p>
              <p className="flex justify-between py-1">
                Theme{" "}
                {!isPremium && (
                  <span>
                    <FaLock color="#8a8a8a" />
                  </span>
                )}
              </p>
              <p className="py-1">Language</p>
              <p className="py-1 text-red-500">Log Out</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
