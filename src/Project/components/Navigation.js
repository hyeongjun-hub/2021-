import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Nav.css';

const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/top">Top</Link>
      <Link to="/bottom">Bottom</Link>
      <Link to="/shoes">Shoes</Link>
      <Link to="/buy">Order</Link>
    </div>
  );
};

export default Navigation;
