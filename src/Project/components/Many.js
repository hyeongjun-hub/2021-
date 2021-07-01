import React, { useEffect } from 'react';

const ShoppingCart = (props) => {
  const { location, history } = props;

  useEffect(() => {
    if (location.state === undefined) {
      history.push('/');
    }
  }, [history, location.state]);

  if (location.state) {
    return (
      <div className="container">
        <div className="orderTitle">
          <h1>Order here</h1>
        </div>
        <div className="orderMain">
          {props.location.state.basket.map((num, i) => {
            return <Item basket={num} key={i} />;
          })}
          <div className="bigCard__button">
            <button
              onClick={() => {
                alert('Thank you!!');
                history.push('/');
              }}
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    alert('there is no shopping item');
    return null;
  }
};

const Item = ({ basket }) => {
  return (
    <div className="orderList">
      <img alt="" src={basket.img} width="20%" />
      <div className="orderList__content">
        <div>
          product id: <b>{basket.id}</b>
        </div>
        <div>
          name: <b>{basket.title}</b>
        </div>
        <div>
          price: <b>${basket.price}</b>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
