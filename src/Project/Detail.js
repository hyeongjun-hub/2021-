import React, { Component } from 'react';

class Detail extends Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <>
          <span>hello</span>

          <span>this is {location.state.title}</span>
          <img alt="" src={location.state.img} width="100%" />

          <span>{location.state.content}</span>
          <span>price : ${location.state.price}</span>
        </>
      );
    } else return null;
  }
}

export default Detail;
