import React, { useEffect } from 'react';

const ShoppingCart = (props) => {
  //   const [bascket, setBasket] = useState([
  //     {
  //       id: 48,
  //       title: 'its yours',
  //       price: 150.0,
  //     },
  //   ]);
  const { location, history } = props;
  useEffect(() => {
    if (location.state === undefined) {
      history.push('/');
    }
  }, [history, location.state]);

  if (location.state) {
    return (
      <div>
        <h1>여기는 주문하는 곳</h1>
        <h2>제목은 {props.location.state.title}</h2>
        <h2>가격은 ${props.location.state.price}</h2>
      </div>
    );
  } else {
    alert('there is no shopping item');
    return null;
  }
};

export default ShoppingCart;
