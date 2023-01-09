import { type NextPage } from "next";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import Layout from "../components/layout";
const Settings: NextPage = () => {
  const [isPremium, setPremium] = useState(false);
  const [buy, setBuy] = useState("Upgrade to Pro");
  const [login, setLogin] = useState(false);
  const handleBuy = () => {
    if (isPremium) {
      setPremium(false);
      setBuy("Upgrade to Pro");
    } else {
      setPremium(true);
      setBuy("Refund");
    }
  };
  const handleLogin = () => {
    if (login) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  };
  return (
    <Layout>
      {/* settings page */}
      <div className="p-5 text-sm">
        <div className="flex flex-col rounded-2xl bg-white px-10 py-5">
          <p className="flex justify-center pb-10 font-semibold">Settings</p>
          <div className="flex w-full flex-col items-start">
            <p className="pb-4 font-semibold">Account</p>
            <div className="py-2">
              <p className="py-2">Edit Profile</p>
              <p className="py-2">Change Password</p>
              <p className="py-2">Two-Factor Authentication</p>
            </div>
            <p className="pb-4 pt-4 font-semibold">System</p>
            <div className="w-full py-2">
              {login ? (
                <button
                  onClick={handleBuy}
                  className="group py-2 text-purple-500"
                >
                  {buy}
                </button>
              ) : (
                <></>
              )}
              <div className="group:flex hidden h-full w-full flex-col items-center justify-center ">
                Upgrade
              </div>
              {login ? (
                <p
                  className={`${
                    isPremium ? "text-black" : "text-[#8a8a8a]"
                  } flex justify-between py-2`}
                >
                  Theme{" "}
                  {!isPremium && (
                    <span>
                      <FaLock color="#8a8a8a" />
                    </span>
                  )}
                </p>
              ) : (
                <></>
              )}
              <p className="py-2">Language</p>
              <button
                onClick={handleLogin}
                className={`py-2 pb-10 ${
                  login ? "text-red-500" : "text-green-500"
                }`}
              >
                {login ? "Log Out" : "Log In"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
