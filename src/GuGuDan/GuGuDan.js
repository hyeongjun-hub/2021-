import React, { Component } from 'react';
import GuGuHeader from './GuGuHeader';
import GuGuInput from './GuGuInput';
import GuGuResult from './GuGuResult';

class GuGuDan extends Component {
    state = {
        first: Math.floor(Math.random()*9 + 1),
        second: Math.floor(Math.random()*9 + 1),
        value: '',
        result: '정답나올 곳',
    };
    onInsert = (_value) => {
        if(parseInt(_value) === this.state.first * this.state.second){
            this.setState({ 
                first: Math.floor(Math.random()*9 + 1),
            second: Math.floor(Math.random()*9 + 1),
            value: '',
            result: _value+' 값은 정답!',
            })
        }
        else{
            this.setState({ value: '', result: _value+ ' 값은 땡!',})
        }
    }
    render() {
        return (
            <div>
                <GuGuHeader first={this.state.first} second={this.state.second}/>
                <GuGuInput onInsert = {this.onInsert}/>
                <GuGuResult result={this.state.result}/>
            </div>
        );
    }
}

export default GuGuDan;