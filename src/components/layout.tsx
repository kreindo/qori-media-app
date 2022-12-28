import React from "react";
import BottomNavbar from "./bottom-navbar/bottomNavbar";
import Navbar from "./navbar/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative mx-auto min-h-screen max-w-md bg-[#f2f2f2]">
      <Navbar />
      <main className="px-6 py-4">{children}</main>
      <BottomNavbar />
    </div>
  );
};

export default Layout;
