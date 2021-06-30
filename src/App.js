import React, { Component } from 'react';
import './App.css';
import Shop from './Project/src/ShoesShop';
import Home from './Project/Home';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './Project/Navigation';
import Detail from './Project/Detail';
// import NumberBaseballFunc from './NumberBaseballFunc';
// import LifleCycleSample from './LifleCycleSample';
// import InterationSample from './InterationSample';
// import EventPractice from './EventPractice';
// import GuGuDan from './GuGuDanFunc/GuGuDan';
// import MyName from './myname';
// import styles from './Box.module.css';

class App extends Component {
  // state={
  //   color: '#000000'
  // }
  // myClick = () => {
  //   this.setState({
  //     color: this.getRandomColor()
  //   })
  // }
  // getRandomColor = () => {
  //   return '#'+Math.floor(Math.random()*16777215).toString(16);
  // }
  render() {
    return (
      <HashRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} />
        <Route path="/shop" exact={true} component={Shop} />
        <Route path="/shoe/:id" exact={true} component={Detail} />
        {/* <button onClick={this.myClick}>
        랜덤색상
      </button>
      <LifleCycleSample color={this.state.color}/> */}
        {/* <InterationSample/> */}
        {/* <GuGuDan/> */}
        {/* <EventPractice/> */}
        {/* <NumberBaseballFunc/> */}
      </HashRouter>
    );
  }
}

export default App;
