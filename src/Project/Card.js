import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Bucket from './Bucket';

const Card = ({ cloth }) => {
  const [bucket, setBucket] = useState('');
  return (
    <div className="bigCard">
      <Link
        className="link"
        to={{
          pathname: `/clothes/${cloth.id}`,
          state: {
            title: cloth.title,
            content: cloth.content,
            price: cloth.price,
            img: cloth.img,
          },
        }}
      >
        <div className="card">
          <img alt="" src={cloth.img} width="30%" />
          <div className="card__Content">
            <h4>{cloth.title}</h4>
            <p>price: ${cloth.price}</p>
          </div>
        </div>
      </Link>
      <div className="bigCard__button">
        <button
          onClick={() => {
            setBucket(cloth.price);
          }}
        >
          in to bucket
        </button>
        <button
          onClick={() => {
            console.log(cloth.price);
          }}
        >
          buy
        </button>
        <Bucket bucket={bucket} />
      </div>
    </div>
  );
};

export default Card;
