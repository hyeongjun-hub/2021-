import React from 'react';
import GuGuResultList from './GuGuResultList';

const GuGuResult = ({result, datas}) => {
    return (
        <div>
            {result}
            {datas.map((data)=>(
                <GuGuResultList data={data} key={data.index}>

                </GuGuResultList>
            ))}
        </div>
    );
};

export default GuGuResult;

