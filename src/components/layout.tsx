import React from "react";
import BottomNavbar from "./bottom-navbar/bottomNavbar";
import Navbar from "./navbar/navbar";

const Layout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`${className} relative mx-auto min-h-screen max-w-md bg-[#f2f2f2]`}>
      <Navbar />
      <main className="px-6 py-4">{children}</main>
      <BottomNavbar />
    </div>
  );
};

export default Layout;
