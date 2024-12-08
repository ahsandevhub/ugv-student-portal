"use client";

import UserImg from "@/public/me.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaInfoCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const Header = () => {
  const pathname = usePathname();

  const formattedPathname =
    pathname === "/"
      ? "Student Dashboard"
      : pathname.slice(1).replace(/-/g, " ");

  return (
    <header className="sticky top-0 z-50 px-6 py-3 bg-white flex items-center justify-between border-b shadow-md">
      <h1 className="text-2xl font-bold text-sky-600 capitalize">
        {formattedPathname}
      </h1>
      <div className="relative w-1/2">
        <div className="overflow-hidden mx-auto whitespace-nowrap border rounded-md bg-gray-50 p-2 shadow-inner">
          <p className="animate-scroll text-orange-500 font-medium">
            Welcome to the Student Portal! Explore your courses and manage your
            profile seamlessly.
          </p>
        </div>
        <div className="absolute top-0 gap-2 left-0 h-full px-3 rounded-md ring-orange-300 border-orange-300 ring-2 text-white flex items-center justify-center border bg-orange-500">
          <FaInfoCircle className="text-xl" />
          <span className="font-medium">Notice:</span>
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
          className="bg-sky-600 hover:bg-sky-800 transition-all hover:gap-3 flex items-center gap-2 rounded-md px-4 text-white font-semibold"
        >
          <MdLogout className="text-xl" />
          <span>Log Out</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
