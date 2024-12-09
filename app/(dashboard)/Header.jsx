"use client";

import UserImg from "@/public/me.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaInfoCircle } from "react-icons/fa";
import { MdLogout, MdOutlineMenuOpen } from "react-icons/md";

const Header = ({ showSidebar, setShowSidebar }) => {
  const pathname = usePathname();

  const formattedPathname =
    pathname === "/" ? "Dashboard" : pathname.slice(1).replace(/-/g, " ");

  return (
    <header className="sticky top-0 z-50 sm:px-6 px-2 py-3 bg-white flex gap-6 items-center justify-between border-b shadow-md">
      <button
        type="button"
        className={`menu_icon block rotate-180 lg:hidden border rounded-md p-2 bg-gray-100 ${
          showSidebar ? "rotate-0" : ""
        }`}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <MdOutlineMenuOpen className="text-2xl" />
      </button>
      <h1 className="hidden lg:block text-2xl font-bold text-sky-600 capitalize">
        {formattedPathname}
      </h1>
      <div className="relative w-1/2 flex-grow lg:flex-none">
        <div className="overflow-hidden mx-auto whitespace-nowrap border rounded-md bg-gray-50 p-2 shadow-inner">
          <p className="animate-scroll text-orange-500 font-medium">
            Welcome to the Student Portal! Explore your courses and manage your
            profile seamlessly.
          </p>
        </div>
        <div className="absolute top-0 gap-2 left-0 h-full px-3 rounded-md ring-orange-300 border-orange-300 ring-2 text-white flex items-center justify-center border bg-orange-500">
          <FaInfoCircle className="text-xl" />
          <span className="font-medium hidden sm:block">Notice:</span>
        </div>
      </div>
      <div className="user flex gap-2">
        <Image
          src={UserImg}
          alt="Student img"
          className="h-10 w-auto rounded-md border"
        />
        <button
          type="button"
          className="bg-sky-600 hidden hover:bg-sky-800 transition-all hover:gap-3 sm:flex items-center gap-2 rounded-md px-4 text-white font-semibold"
        >
          <MdLogout className="text-xl" />
          <span>Log Out</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
