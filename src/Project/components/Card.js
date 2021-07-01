import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ onInsert, cloth }) => {
  const { id, title, content, price, img } = cloth;
  const onClick = () => {
    onInsert(cloth);
  };
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
              <p>${price}</p>
            </div>
          </div>
        </div>
      </Link>
      <div className="bigCard__button">
        <button onClick={onClick}>in to basket</button>
        <button>
          <Link
            to={{
              pathname: `/buy`,
              state: {
                title: cloth.title,
                price: cloth.price,
                img: cloth.img,
                id: cloth.id,
              },
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
