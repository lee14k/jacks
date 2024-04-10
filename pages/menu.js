import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import NewMenu from "@/components/NewMenu";

export default function Menu() {
  const [state, setState] = useState("start");

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl">Menu</h1>
        <p>
          Our homestyle meals are made from scratch and served with
          old-fashioned friendly service. Our in-house baker makes fresh bread,
          rolls, pies, and cookies as well as our world famous cinnamon rolls
        </p>
        <p>
          We are committed to our community and family atmosphere. We are so
          glad you are here!
        </p>
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
