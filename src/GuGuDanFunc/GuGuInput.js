import React, { useRef, useState } from 'react';

const GuGuInput = ({onInsert}) => {
    const [inputStr, setInputStr] = useState('')
    const inputRef = useRef();
    const onChange = (e) => {
        setInputStr(e.target.value)
    };
    const onSubmit = (e) => { 
        e.preventDefault();
        onInsert(inputStr);
        setInputStr('');

        inputRef.current.focus();
    };

    return (
        <form onSubmit={onSubmit}>
                <input 
                ref= {inputRef}
                type="number" 
                placeholder="your answer"
                value={inputStr}
                onChange={onChange}
                />
                <button>입력</button>
            </form>
    );
};

export default GuGuInput;

