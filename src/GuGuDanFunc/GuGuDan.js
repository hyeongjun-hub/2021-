import React, { useState } from 'react';
import GuGuHeader from './GuGuHeader';
import GuGuInput from './GuGuInput';
import GuGuResult from './GuGuResult';

const GuGuDan = () => {
    const ranNum = Math.floor(Math.random()*9 + 1);
    const ranNum2 = Math.floor(Math.random()*9 + 1);

    const[first, setFirst] = useState(ranNum);
    const[second, setSecond] = useState(ranNum2);
    const[result, setResult] = useState('');
    const initNum = () => {
        setFirst(ranNum);
        setSecond(ranNum2);
    }
    const onInsert = (_value) => {
        if(parseInt(_value) === first * second){
            setResult(_value +', 정답입니다!',)
            initNum();
        }
        else{
            setResult('땡! 정답은 ' + first * second + '입니다')
            initNum();
        }
    }
    return (
        <div>
            <p> 함수형 컴퍼넌트로 만든 </p>
            <GuGuHeader first={first} second={second}/>
            <GuGuInput onInsert = {onInsert}/>
            <GuGuResult result={result}/>
        </div>
    );
};


export default GuGuDan;