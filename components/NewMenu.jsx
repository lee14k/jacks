import React, { ComponentType, useState } from "react";
import LD from "@/components/LD";
import Breakfast from "@/components/Breakfast";
import BBQMenu from "@/components/BBQMenu";
import Image from "next/image";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({ weight: "400", subsets: ["latin"] });
const ParentComponent = () => {
  const [activeComponent, setActiveComponent] = useState("");

  const renderComponent = () => {
    switch (activeComponent) {
      case "A":
        return <Breakfast />;
      case "B":
        return <LD />;
      case "C":
        return <BBQMenu />;
    }
  };

  return (
    <div className={merriweather.className}>
    <div className="mt-12">
      <div className="flex justify-center items-center gap-12">
        <ul className="flex lg:flex-row flex-col  gap-10 mb-16">
          <li className="flex flex-col justify-center items-center">
            <Image src="/breads.jpeg" height={500} width={500} />{" "}
            <button
              onClick={() => setActiveComponent("A")}
              className="bg-emerald-950 py-2 mt-2 px-48 text-white text-xl"
            >
              Breakfast{" "}
            </button>
          </li>
          <li className="flex flex-col justify-center items-center">
            <Image src="/reuben.jpeg" height={500} width={500} />{" "}
            <button
              onClick={() => setActiveComponent("B")}
              className="bg-emerald-950 py-2 mt-2 px-48 text-white text-xl"
            >
              Lunch & Dinner{" "}
            </button>{" "}
          </li>

          <li className="flex flex-col justify-center items-center">
            <Image src="/bbq.jpeg" height={500} width={500} />{" "}
            <button
              onClick={() => setActiveComponent("C")}
              className="mt-2 bg-emerald-950 py-2 px-52 text-white text-xl"
            >
              BBQ{" "}
            </button>
          </li>
        </ul>
      </div>
      <div>{renderComponent()}</div>
    </div>
    </div>
  );
};

export default ParentComponent;
