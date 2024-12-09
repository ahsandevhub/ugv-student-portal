import Logo from "@/public/ugv-logo.png";
import Image from "next/image";
import NavLinks from "./NavLinks";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <aside
      className={`fixed w-64 flex-none lg:static z-50 top-0 left-0 h-screen lg:h-auto bg-white border-r shadow-md space-y-4 p-4 transform transition-transform duration-300 ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0`}
    >
      {/* Close button for mobile */}
      <div className="flex justify-between items-center">
        <div className="logo flex items-center gap-2">
          <div className="img h-12 aspect-square border shadow-inner p-1 rounded-lg">
            <Image
              src={Logo}
              alt="ugv logo"
              className="h-full w-auto mx-auto"
            />
          </div>
          <div className="txt space-y-1">
            <h3 className="text-red-600 tracking-widest font-bold leading-none text-2xl">
              U G V
            </h3>
            <p className="text-gray-800 tracking-wider leading-none">
              Student Portal
            </p>
          </div>
        </div>
      </div>

      <nav className="nav">
        <NavLinks />
      </nav>
    </aside>
  );
};

export default Sidebar;
