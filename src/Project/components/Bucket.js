import React from 'react';

const Bucket = ({ basket }) => {
  const { title, price } = basket;
  return (
    <div className="basketEach">
      <div>
        name: <b>{title}</b>
      </div>
      <div>
        price: <b>${price}</b>
      </div>
    </div>
  );
};

export default Bucket;
