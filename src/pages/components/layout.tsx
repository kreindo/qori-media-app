import React from "react";
import { Navbar } from "./navbar/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-[#f2f2f2]">
      <Navbar />
      <main className="px-6 py-4">{children}</main>
    </div>
  );
};

export default Layout;
