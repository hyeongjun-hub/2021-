import React, { Component } from 'react';

class Detail extends Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="container">
          <h2>
            <b>{location.state.title}</b>
          </h2>
          <img alt="" src={location.state.img} width="80%" />

          <span>{location.state.content}</span>
          <span>price : ${location.state.price}</span>
        </div>
      );
    } else return null;
  }
}

export default Detail;
