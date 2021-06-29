import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyName extends Component {
    constructor(props){
        super(props);
        this.state = {
            liked: 0,
        };
    }
    render() {
            const {name, favoriteNum } = this.props;
        return(
            <>
                <h1>
                    Hello! my name is <b>{name}</b>
                </h1>
                <h2>제가 제일 좋아하는 숫자는 {favoriteNum}</h2>
                좋아요: {this.state.liked}
                <button 
                    onClick={() => {
                            this.setState({liked: this.state.liked+1})
                    }}
                >
                    좋아요
                </button>
            </>
        );
    }
}

MyName.propTypes = {
    name: PropTypes.string,
    favoriteNum: PropTypes.number.isRequired,
};

export default MyName;