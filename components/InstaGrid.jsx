import React from "react";
const InstaGrid = () => {
 const images = [
    {
      id: 1,
      src: "/jacks-grid-1.jpg",
      alt: "pancakes",
    },
    {
      id: 2,
      src: "/jacks-grid-2.jpg",
      alt: "sandwich",
    },
    {
      id: 3,
      src: "/jacks-grid-3.jpg",
      alt: "steak on the grill ",
    },
    {
      id: 4,
      src: "/jacks-grid-4.jpg",
      alt: "m&m cookies",
    },
    {
      id: 5,
      src: "/jacks-grid-5.jpg",
      alt: "loaves of bread ",
    },
    {
      id: 6,
      src: "/jacks-grid-6.jpg",
      alt: "reuben sandwich on the grill",
    },
    {
      id: 7,
      src: "/jacks-grid-7.jpg",
      alt: "customers enjoying a meal",
    },
    {
      id: 8,
      src: "/jacks-grid-8.jpg",
      alt: "sunny side up eggs on the grill",
    },
    {
      id: 9,
      src: "/jacks-grid-9.jpg",
      alt: "bbq hamburger and waffle fries",
    },
 ] 
  return (
    <div className="flex justify-center items-center bg-transparent">
      <div className="grid sm:grid-cols-3 my-16 w-3/4 gap-4 instacontainer">
        {images.map((item) => (
          <div key={item.id} className="flex justify-center items-center aspect-square rounded-xl overflow-hidden">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstaGrid;
