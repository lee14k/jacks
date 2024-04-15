import Image from "next/image";
import Link from "next/link";
import PrettyPhotoRow from "./PrettyPhotoRow";
import { Rubik_Doodle_Shadow } from "next/font/google";
const rubik = Rubik_Doodle_Shadow({ weight: "400", subsets: ["latin"] });
import { Cedarville_Cursive } from "next/font/google";
const cedar = Cedarville_Cursive({ weight: "400", subsets: ["latin"] });

import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ weight: "400", subsets: ["latin"] });
const Header = () => {
  const headline = "Welcome to Jack's"; // The headline that overlays the images
  const homeImages = ["/breads.jpeg", "/bbq.jpeg", "/pie.jpeg"];
  return (
    <div className={merriweather.className}>
    <div className="bigheadcontainer">
      <div className="headercontainer flex flex-col justify-center items-center w-lvw">
        <Image
          src="/newjacks.png"
          height={600}
          width={600}
          className="signicon"
        />
        <div className="my-24">
          <Link href="https://orders.cake.net/11333695">
            <button className="bg-emerald-950 px-12 py-2.5 text-4xl font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Order Now!
            </button>
          </Link>
        </div>
      </div>
      <PrettyPhotoRow images={homeImages} headline={headline} />

      <div className="flex justify-center items-center text-center ">
        <div className="mx-48 my-32 grid lg:grid-cols-2 ">
          <div className="pl-24">
            <Image src="/signill.png" height={300} width={300} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <div className="flex flex-col justify-center items-center">
                <h3 className="text-4xl">At the crossroads of the UP</h3>
                <h2 className="text-6xl">Hometown cooking</h2>
                <Image src="/jacksborder.png" height={400} width={400} />
                <p className="text-2xl text-pretty mx-12">
                  Our cozy diner-style restaurant has been serving up delicious
                  meals and warm smiles for generations. From mouthwatering
                  breakfasts to hearty lunches and hand-smoked BBQ and dinners,
                  we take pride in offering dishes made with love.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
