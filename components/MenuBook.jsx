import React, { useState } from 'react';

const MenuBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 8; // Adjust based on your actual page count

  // Example URLs for background images, replace these with your actual image URLs
  const pageBackgroundImages = [
    'url("/1.png")',
    'url("/2.png")',
    'url("/3.png")',
    'url("/4.png")',
    'url("/5.png")',
    'url("/6.png")',
    'url("/7.png")',
    'url("/8.png")',
  ];

  // Function to flip to the next page
  const flipNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to flip to the previous page
  const flipPrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="menuSection">
      <button className="flipButton prev" onClick={flipPrev} disabled={currentPage === 0}>&lt;</button>
      <div className="book">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div 
            key={index} 
            className={`page ${index === currentPage ? 'visible' : 'hidden'}`} 
            style={{ backgroundImage: pageBackgroundImages[index], backgroundSize: 'cover', height: '100%', width: '100%' }}
          >
            {/* You can still add content here if needed */}
          </div>
        ))}
      </div>
      <button className="flipButton next" onClick={flipNext} disabled={currentPage === totalPages - 1}>&gt;</button>
    </section>
  );
};

export default MenuBook;
