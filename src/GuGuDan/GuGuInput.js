import React, { Component } from 'react';

class GuGuInput extends Component {
    render() {
        return (
            <form>
                <input type="number" placeholder="your answer"/>
                <button>입력</button>
            </form>
        );
    }
}

export default GuGuInput;