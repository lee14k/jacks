import React, { ComponentType, useState } from 'react';
import LD from '@/components/LD';
import Breakfast from '@/components/Breakfast';
const ParentComponent = () => {
const [activeComponent, setActiveComponent] = useState('')

const renderComponent = () => {
    switch (activeComponent) {
        case 'A':
            return <Breakfast />;
        case 'B':
            return <LD />;
   
        default:
            return <div>Select a component</div>;
    }
};

  return (
    <div>
        <div >
      <button onClick={() => setActiveComponent('A')}>Load Component A</button>
      </div>
      <button onClick={() => setActiveComponent('B')}>Load Component B</button>
      <div>{renderComponent()}</div>
    </div>
  );
};

export default ParentComponent;
