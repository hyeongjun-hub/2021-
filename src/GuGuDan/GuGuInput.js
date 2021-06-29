import React, { Component } from 'react';

class GuGuInput extends Component {
    state = {
        inputStr: '',
    };
    onChange = (e) => {
        this.setState({ 
            inputStr: e.target.value,
        });
    };
    onSubmit = (e) => { 
        e.preventDefault();
        this.props.onInsert(this.state.inputStr);
        this.setState({ inputStr:'' });
        this.input.focus();
    };
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                ref= {(ref) => {this.input = ref;}}
                type="number" 
                placeholder="your answer"
                value={this.state.inputStr}
                onChange={this.onChange}
                />
                <button>입력</button>
            </form>
        );
    };
}

export default GuGuInput;