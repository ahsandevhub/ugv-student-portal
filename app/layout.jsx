import Logo from "@/public/ugv-logo.png";
import localFont from "next/font/local";
import Image from "next/image";
import "./globals.css";
import Header from "./Header";
import NavLinks from "./NavLinks";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "UGV Student Portal",
  description: "Developed by Ahsan Habib",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-screen overflow-hidden text-gray-800`}
      >
        <aside className="p-4 w-64 bg-white flex-none border-r space-y-4 shadow-md">
          <div className="logo flex items-center border-b-2 pb-4 gap-2">
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
          <nav className="nav">
            <NavLinks />
          </nav>
          <div className="logout"></div>
        </aside>
        <main className="flex-grow flex flex-col overflow-auto bg-slate-100">
          <Header />
          <div className="mx-6 my-4 flex-grow">{children}</div>
          <footer className="px-4 text-sm border-t py-2 bg-white text-center">
            Developed by: &copy;{" "}
            <a href="http://ahsandevhub.com" className="hover:underline">
              Ahsan Habib
            </a>
          </footer>
        </main>
      </body>
    </html>
  );
}
