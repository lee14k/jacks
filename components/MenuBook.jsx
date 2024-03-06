import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MenuBook = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = 8; // Adjust based on your actual page count

  // Example URLs for background images, replace these with your actual image URLs
  const pageBackgroundImages = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
  ];

  const flipNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const flipPrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const pageVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const pageTransition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.2 },
  };

  return (
    <section className="menuSection flex justify-center items-center">
      <button
        className="flipButton prev rounded-full bg-gray-200 w-20 h-20"
        onClick={flipPrev}
        disabled={currentPage === 0}
      >
        &lt;
      </button>
      <div className="book">
        <AnimatePresence initial={false} custom={currentPage}>
          <motion.div
            key={currentPage}
            custom={currentPage}
            variants={pageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={pageTransition}
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
            }}
          >
            <img
              src={pageBackgroundImages[currentPage]}
              alt={`Menu Page ${currentPage + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        className="flipButton next rounded-full bg-gray-200 w-20 h-20"
        onClick={flipNext}
        disabled={currentPage === totalPages - 1}
      >
        &gt;
      </button>
    </section>
  );
};

export default MenuBook;
