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
      <div className="bigContainer">
        <div className="container">
          <div className="orderTitle">
            <h1>Order here</h1>
          </div>
          <div className="orderMain">
            <div className="orderList">
              <img alt="" src={props.location.state.img} width="20%" />
              <div className="orderList__content">
                <div>
                  product id: <b>{props.location.state.id}</b>
                </div>
                <div>
                  name: <b>{props.location.state.title}</b>
                </div>
                <div>
                  price: <b>${props.location.state.price}</b>
                </div>
              </div>
            </div>

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
      </div>
    );
  } else {
    alert('there is no shopping item');
    return null;
  }
};

export default ShoppingCart;
