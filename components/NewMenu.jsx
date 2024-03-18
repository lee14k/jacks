import React, { ComponentType, useState } from "react";
import LD from "@/components/LD";
import Breakfast from "@/components/Breakfast";
const ParentComponent = () => {
  const [activeComponent, setActiveComponent] = useState("");

  const renderComponent = () => {
    switch (activeComponent) {
      case "A":
        return <Breakfast />;
      case "B":
        return <LD />;
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <ul className="flex gap-10">
          <li>
            {" "}
            <button onClick={() => setActiveComponent("A")}>Breakfast </button>
          </li>
          <li>
            {" "}
            <button onClick={() => setActiveComponent("B")}>
              Lunch & Dinner{" "}
            </button>
          </li>
        </ul>
      </div>
      <div>{renderComponent()}</div>
    </div>
  );
};

export default ParentComponent;
