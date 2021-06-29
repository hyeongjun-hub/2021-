import React, { Component } from 'react';
import GuGuHeader from './GuGuHeader';
import GuGuInput from './GuGuInput';
import GuGuResult from './GuGuResult';

class GuGuDan extends Component {
    state = {
        first: Math.floor(Math.random()*9 + 1),
        second: Math.floor(Math.random()*9 + 1),
        value: '',
        result: '결과 나올 곳',
    };
    render() {
        return (
            <div>
                <GuGuHeader first={this.state.first} second={this.state.second}/>
                <GuGuInput />
                <GuGuResult result={this.state.result}/>
            </div>
        );
    }
}

export default GuGuDan;