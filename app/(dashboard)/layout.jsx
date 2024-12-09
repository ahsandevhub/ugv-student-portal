"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function DasbboardLayout({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <main className="flex-grow flex flex-col overflow-auto bg-slate-100">
        <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div className="sm:mx-6 sm:my-4 my-4 flex-grow">{children}</div>
        <footer className="px-4 text-sm border-t py-2 bg-white text-center">
          Developed by: &copy;{" "}
          <a href="http://ahsandevhub.com" className="hover:underline">
            Ahsan Habib
          </a>
        </footer>
      </main>
    </>
  );
}
