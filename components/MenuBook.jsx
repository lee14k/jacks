import React, { useState } from 'react';
// Ensure your CSS file is correctly imported

const MenuBook = () => {
    // State to track if the book is flipped (true for flipped, false for not flipped)
    const [isFlipped, setIsFlipped] = useState(false);

    // Function to flip to the next page (toggle flip state)
    const flipNext = () => {
        setIsFlipped(true); // Assuming flipping forward always flips the book
    };

    // Function to flip to the previous page (toggle flip state back)
    const flipPrev = () => {
        setIsFlipped(false); // Assuming flipping back returns to the original state
    };

    return (
        <section className="menusection">
                        <button className="flipButton prev" onClick={flipPrev}>&lt;</button>

            <div className={`book ${isFlipped ? 'flipped' : ''}`}>
                {/* Assuming cover is part of what flips; adjust if your structure is different */}
                <div className="cover"></div> 
                <div className="pg pg1">HTML</div>
                <div className="pg pg2">CSS</div>
            </div>
            <div>
            <button className="flipButton next" onClick={flipNext}>&gt;</button>
            </div>
        </section>
    );
};

export default MenuBook;
