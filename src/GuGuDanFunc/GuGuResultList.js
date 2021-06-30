import React from 'react';

const GuGuResultList = ({data}) => {
    const{index, text} = data;
    return (
        <div>
            {`${index}. ${text}`}
        </div>
    );
};

export default GuGuResultList;