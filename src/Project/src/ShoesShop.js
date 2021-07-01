import React, { useState, useCallback, useRef } from 'react';
import Shoes from '../Data/ShoesData';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import Bucket from '../components/Bucket';

const ShoesShop = () => {
  const nextId = useRef(0);
  const [basket, setBasket] = useState([]);
  const onInsert = useCallback(
    (_text) => {
      const bucket = {
        id: nextId.current,
        title: _text.title,
        price: _text.price,
        img: _text.img,
      };
      setBasket(basket.concat(bucket));
      nextId.current += 1;
    },
    [basket],
  );
  // eslint-disable-next-line no-unused-vars
  const [cloth, clothState] = useState(Shoes);
  return (
    <div className="bigContainer">
      <div className="container">
        {cloth.map((num, i) => {
          return <Card cloth={num} key={i} onInsert={onInsert} />;
        })}
      </div>
      <div className="basketContainer">
        <h4>
          <b>Shopping Basket</b>
        </h4>
        <div className="basketMain">
          {basket.map((num, i) => {
            return <Bucket basket={num} key={i} />;
          })}
        </div>
        <div className="basketLink">
          <Link
            className="orderLink"
            to={{
              pathname: `/buymany`,
              state: {
                basket: basket,
              },
            }}
          >
            Order
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoesShop;
