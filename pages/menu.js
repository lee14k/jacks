import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import NewMenu from "@/components/NewMenu";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ weight: "400", subsets: ["latin"] });
export default function Menu() {
  const [state, setState] = useState("start");

  return (
    <div className={merriweather.className}>
      <Navbar />
      <div className="flex flex-col justify-center items-center menuheader">
        <h1 className="text-8xl my-12 text-white">Menu</h1>
      </div>
      <NewMenu />
      <div className="flex gap-12 justify-center items-center">
        <Link href="/menu.pdf">
          <button className="rounded-md bg-emerald-800 my-12 px-3.5 py-2.5 text-l font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            PDF Menu
          </button>
        </Link>
        <Link href="https://orders.cake.net/11333695">
          <button className="my-10 rounded-md bg-emerald-800 px-3.5 py-2.5 text-l font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Order Now!
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
