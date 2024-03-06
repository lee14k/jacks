import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const StackedMenu = () => {
    return (
        <Link href="/menu">
        <div className="menu-container">
            <div className="menu-stack menu-one"></div>
            <div className="menu-stack"></div>
            
        </div>
        </Link>
    );
};

export default StackedMenu;
