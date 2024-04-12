import React, { ComponentType, useState } from "react";
import LD from "@/components/LD";
import Breakfast from "@/components/Breakfast";
import BBQMenu from "@/components/BBQMenu";
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
    <div>
      <div className="flex justify-center items-center gap-12">
        <ul className="flex gap-10">
          <li>
            {" "}
            <button
              onClick={() => setActiveComponent("A")}
              className="bg-emerald-950 py-2 px-4 text-white text-xl"
            >
              Breakfast{" "}
            </button>
          </li>
          <li>
            {" "}
            <button
              onClick={() => setActiveComponent("B")}
              className="bg-emerald-950 py-2 px-4 text-white text-xl"
            >
              Lunch & Dinner{" "}
            </button>{" "}
            </li>

            <li>
            <button
              onClick={() => setActiveComponent("C")}
              className="bg-emerald-950 py-2 px-4 text-white text-xl"
            >
              BBQ{" "}
            </button>
          </li>
        </ul>
      </div>
      <div>{renderComponent()}</div>
    </div>
  );
};

export default ParentComponent;
