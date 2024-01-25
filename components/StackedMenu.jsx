import React from 'react';
import Image from 'next/image';
const StackedMenu = () => {
    return (
        <div className="menu-container">
            <Image src='/menuone.png' height={160} width={100} className="menu-icon" />
            <div className="menu-stack"></div>
            <div className="menu-stack"></div>
            <div className="menu-stack"></div>
        </div>
    );
};

export default StackedMenu;
