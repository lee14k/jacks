import Image from "next/image";
import Link from "next/link";

import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ weight: "400", subsets: ["latin"] });
const PhotoRow = () => {
  return (
    <div className="photorowbg flex flex-col justify-center items-center gap-4 py-24 ">
      <div className="grid grid-col-1 sm:grid-cols-3 gap-14">
        <div className="text-4xl flex flex-col justify-center items-center font-bold ">
          <Image src="/sqsteakies.png" height={300} width={300} className="rounded" />
          <h4 className={merriweather.className}>Hand Smoked BBQ</h4>
        </div>
        <div className="text-4xl flex flex-col justify-center items-center font-bold ">
          <Image
            src="/eg.jpeg"
            height={350}
            width={350}
            className="rounded"
          />
          <h4 className={merriweather.className}>All Day Breakfast</h4>{" "}
        </div>
        <div className="text-4xl flex flex-col justify-center items-center font-bold ">
          <Image src="/reuben.jpeg" height={270} width={270} className="rounded" />
          <h4 className={merriweather.className}>Lunch & Other Bites</h4>{" "}
        </div>
      </div>
      <Link href="/menu">
      <button className="bg-emerald-950 px-12 py-2.5 text-4xl font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          View Menu
        </button>
      </Link>
    </div>
  );
};

export default PhotoRow;
