import React, { Component } from 'react';

class LifleCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    };
    myRef = null;
    constructor(props){
        super(props);
        console.log('constuctor');
    }
    static getDerivedStateFromProps(nextProps, prevState){
        console.log("getDerivedStateFromProps");
        if(nextProps.color!==prevState.color){
            return{color:nextProps.color}
        }
        return null;
    }
    componentDidMount(){
        console.log("componenetDidMount");
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate", nextProps, nextState);
        return nextState.number % 4 !== 0;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate");
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }
    componentDidUpdate(prevProps, prevState, snapShot){
        console.log("componentDidUpdate",prevProps, prevState);
        if(snapShot){
            console.log("업데이트되기 전 색상: ",snapShot);
        }
    }

    render() {
        console.log("render");
        const style = { color:this.props.color, };

        return (
            <div>
                <h1 style={style} ref={(ref)=>{this.myRef=ref}}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={()=>{
                    this.setState({number:this.state.number+1})
                }}>
                    더하기
                </button>
            </div>
        );
    }
}

export default LifleCycleSample;