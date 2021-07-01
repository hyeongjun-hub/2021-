import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Nav.css';

const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/shoes">shoes</Link>
      <Link to="/top">top</Link>
    </div>
  );
};

export default Navigation;
