import React, { useState } from 'react';
import Bottom from '../Data/BottomData';
import Card from '../components/Card';

const BottomShop = () => {
  // eslint-disable-next-line no-unused-vars
  const [cloth, clothState] = useState(Bottom);
  return (
    <div className="bigContainer">
      <div className="container">
        {cloth.map((num, i) => {
          return <Card cloth={num} key={i} />;
        })}
      </div>
    </div>
  );
};

export default BottomShop;
