import React from 'react';

const InterationSample = () => {
    const fruits = ['사과', '배', '포도', '수박'];
    const fruitList =  fruits.map((name, index)=>{
        return <li key={index}>{name}</li>
    });
    return (
        <div>
            <ul>
                {fruitList}
            </ul>
        </div>
    );
};

export default InterationSample;