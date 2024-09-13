import React, { useState } from 'react';
import Button from './Components/Button';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [isMode, setIsMode] = useState(false);

  const handleMode = () => {
    setIsMode(!isMode);
  };

  // Conditional classes for light and dark mode
  const containerClass = isMode
    ? 'Container flex justify-center items-center flex-col w-screen bg-white h-screen'
    : 'Container flex justify-center items-center flex-col w-screen bg-black h-screen';

  const boxClass = isMode
    ? 'flex flex-col rounded-xl bg-black text-blue-950 w-80 h-80'
    : 'flex flex-col rounded-xl bg-white text-black w-80 h-80';

  const textClass = isMode ? 'text-white' : 'text-black';

  return (
    <div className={containerClass}>
      <button onClick={handleMode} className="bg-gray-700 text-white p-2 rounded-md">
        {isMode ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
      <div className={boxClass}>
        <h1 className={`font-bold text-center text-8xl mt-20 ${textClass}`}>{counter}</h1>
        <div className="limited flex flex-col text-center mt-9">
          <p className={`font-sans font-semibold text-sm ${textClass}`}>-12</p>
          <p className={`font-semibold font-mono text-sm ${textClass}`}>Limit Reached</p>
        </div>
        <div className="flex justify-around mt-3">
          <span
            onClick={() => {
              if (counter > -12) {
                setCounter(counter - 1);
              }
            }}
          >
            <Button text="-" />
          </span>
          <span
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            <Button text="+" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
