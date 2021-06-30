import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Shoes from '../Data/ShoesData';

const Shop = () => {
  const [shoes, shoeState] = useState(Shoes);
  return (
    <div>
      <div className="container">
        <div className="row">
          {shoes.map((num, i) => {
            return <Card shoes={num} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

const Card = (props) => {
  return (
    <Link
      to={{
        pathname: `/shoe/${props.shoes.id}`,
        state: {
          title: props.shoes.title,
          content: props.shoes.content,
          price: props.shoes.price,
          img: props.shoes.img,
        },
      }}
    >
      <div className="col-md-4">
        <img alt="" src={props.shoes.img} width="20%" />
        <h4>{props.shoes.title}</h4>
        <p>price: ${props.shoes.price}</p>
      </div>
    </Link>
  );
};

export default Shop;
