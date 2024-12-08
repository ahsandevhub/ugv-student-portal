"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHome, GoTasklist } from "react-icons/go";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { LuCalendarDays, LuClipboardCheck, LuUserPen } from "react-icons/lu";
import { TbUserCheck } from "react-icons/tb";

const NavLinks = () => {
  const pathname = usePathname();
  const navLinks = [
    { icon: <GoHome />, text: "Dashboard", href: "/" },
    { icon: <GoTasklist />, text: "Routines", href: "/routines" },
    { icon: <TbUserCheck />, text: "Attendence", href: "/attendence" },
    { icon: <LuClipboardCheck />, text: "Results", href: "/results" },
    { icon: <HiOutlineBanknotes />, text: "Payments", href: "/payments" },
    { icon: <LuUserPen />, text: "Registration", href: "/registration" },
    { icon: <LuCalendarDays />, text: "Semester plan", href: "/semester-plan" },
  ];

  return (
    <ul className="flex gap-3 flex-col">
      {navLinks.map((link, index) => (
        <li key={index}>
          <Link
            href={link.href}
            className={`flex items-center gap-2 text-sm lg:text-base px-3 py-2 rounded-md ${
              pathname === link.href
                ? "bg-sky-600 text-sky-50 font-semibold"
                : "bg-slate-100 font-medium hover:bg-sky-200 transition-all"
            }`}
          >
            <span className="text-2xl lg:text-xl">{link.icon}</span>
            <span className="hidden lg:block">{link.text}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
