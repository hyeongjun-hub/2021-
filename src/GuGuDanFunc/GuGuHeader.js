import React, { Component } from 'react';

class GuGuHeader extends Component {
    render() {
        return (
            <div>
                <h1>구구단 게임</h1>
                <h3>{this.props.first} x {this.props.second} = ?</h3>
            </div>
        );
    }
}

export default GuGuHeader;