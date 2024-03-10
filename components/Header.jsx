import Image from "next/image";
import Link from "next/link";
import { Rubik_Doodle_Shadow } from "next/font/google";
const rubik = Rubik_Doodle_Shadow({ weight: "400", subsets: ["latin"] });
import { Cedarville_Cursive } from "next/font/google";
const cedar = Cedarville_Cursive({ weight: "400", subsets: ["latin"] });

import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ weight: "400", subsets: ["latin"] });
const Header = () => {
  return (
    <div className>
      <div className="headercontainer flex flex-col justify-center items-center w-lvw">
        <Image src="/newjacks.png" height={400} width={400} />
        <div className="my-12">
          <Link href="https://orders.cake.net/11333695">
            <button className="rounded-md bg-emerald-800 px-3.5 py-2.5 text-2xl font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Order Now!
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center ">
        <div className="mx-48 my-32">
          <div className={merriweather.className}>
            <Image src="/eggicon.png" height={200} width={200} />
            <h2 className="text-8xl">Hometown cooking</h2>
          </div>
          <div>
            <h3 className="text-6xl">At the crossroads of the UP</h3>
          </div>
          <p className="text-xl text-pretty">
            Welcome to Jack's, where family and flavor come together in the
            heart of Rapid River! Our cozy diner-style restaurant has been
            serving up delicious meals and warm smiles for generations. From
            mouthwatering breakfasts to hearty lunches and hand-smoked BBQ and
            dinners, we take pride in offering dishes made with love.
          </p>
          <Image src="/rollicon.png" height={200} width={200} />
        </div>
      </div>
    </div>
  );
};

export default Header;
