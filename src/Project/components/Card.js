import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ cloth }) => {
  const { id, title, content, price, img } = cloth;
  return (
    <div className="bigCard">
      <Link
        className="link"
        to={{
          pathname: `/clothes/${id}`,
          state: {
            title,
            content,
            price,
            img,
          },
        }}
      >
        <div className="card">
          <div className="card__white">
            <img alt="" src={img} width="30%" />
            <div className="card__Content">
              <h6>{title}</h6>
              <p>price: ${price}</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="bigCard__button">
        <button onClick={() => {}}>in to bucket</button>
        <button>
          <Link
            to={{
              pathname: `/buy`,
              state: { title: cloth.title, price: cloth.price, img: cloth.img },
            }}
          >
            buy
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
