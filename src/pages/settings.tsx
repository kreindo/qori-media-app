import { type NextPage } from "next";
import Layout from "../components/layout";
const Settings: NextPage = () => {
  return (
    <Layout>
      {/* settings page */}
      <div className="p-10">
        <div className="flex flex-col items-center rounded-2xl bg-white py-5">
          <p className="pb-5 font-semibold">Settings</p>
          <div className="flex flex-col items-start">
            <p className="pb-4 font-semibold">Account</p>
            <div className="py-2">
              <p className="py-1">Edit Profile</p>
              <p className="py-1">Change Password</p>
              <p className="py-1">Two-Factor Authentication</p>
            </div>
            <p className="pb-4 font-semibold">System</p>
            <div className="py-2">
              <p className="py-1 text-purple-500">Upgrade to Pro</p>
              <p className="py-1">Theme</p>
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
