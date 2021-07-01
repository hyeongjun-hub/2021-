import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Shoes from './Project/src/ShoesShop';
import Top from './Project/src/TopShop';
import Bottom from './Project/src/BottomShop';
import Home from './Project/components/Home';
import Buy from './Project/components/ShoppingCart';
import Navigation from './Project/components/Navigation';
import Detail from './Project/components/Detail';
import './Project/CSS/Card.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <>
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/shoes" exact={true} component={Shoes} />
        <Route path="/top" exact={true} component={Top} />
        <Route path="/bottom" exact={true} component={Bottom} />
        <Route path="/buy" exact={true} component={Buy} />
        <Route path="/clothes/:id" exact={true} component={Detail} />
      </HashRouter>
    </>
  );
};

export default App;
