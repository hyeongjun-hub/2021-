import React, { useState } from 'react';
import Try from './Try';

function getNumbers() {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

const NumberBaseballFunc = () => {
  const [result, setResult] = useState('');
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (value === answer.join('')) {
      setResult('homerun!');
      setTries((prevTries) => {
        return [...prevTries, { try: value, result: 'homerun!' }];
      });
      alert('game restart');
      setValue('');
      setAnswer(getNumbers());
      setTries([]);
    } else {
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`you lose! answer is ${answer.join(',')}!!`);
        alert('game restart');
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((prevTries) => {
          return [
            ...prevTries,
            { try: value, result: `${strike}strike ${ball}ball` },
          ];
        });
        setValue('');
      }
    }
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmit}>
        <input maxLength={4} value={value} onChange={onChange} />
      </form>
      <div>tries : {tries.length}</div>
      <ul>
        {tries.map((v, i) => {
          return <Try key={i} tryInfo={v} />;
        })}
      </ul>
    </>
  );
};

export default NumberBaseballFunc;
