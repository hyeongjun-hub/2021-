import React, { Component } from 'react';

class EventPractice extends Component {
    state={
        message: '',
        mode: '확인',
    }
    myChange = (e) => {
        this.setState({ message: e.target.value });
    }
    myClick = (e) => {
        alert(this.state.message);
        this.setState({ message: ''});
        this.input.focus();
    }
    myOver = () => {
        this.setState({
            mode: '정말?',
        })
        
    }
    myOut = () => {
        this.setState({
            mode: '확인',
        })
    }   
    render() {
        return (
            <div>
                이벤트연습
                <input 
                ref = {(ref) => { 
                    this.input = ref;
                }}
                type="text" 
                name="message" 
                value={this.state.message}
                onChange={this.myChange}
                placeholder={this.state.mode}
                />
                <button 
                onClick={this.myClick}
                onMouseOver = {this.myOver}
                onMouseOut = {this.myOut}
                >
                    {this.state.mode}
                </button>
            </div>
        );
    }
}

export default EventPractice;