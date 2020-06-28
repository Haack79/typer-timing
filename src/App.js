import React from "react";
import useGamePlay from "./hooks/appFunctions";

const App = () => {
  const {  
    isRunning,
    startGame,
    timeLeft,
    wordCount, 
    wordsPerSecond, 
    text, 
    textBoxRef, 
    handleChange
  } = useGamePlay(); 
  return (
      <div>
          <h1>How fast do you type?</h1>
          <textarea
              ref={textBoxRef}
              onChange={handleChange}
              value={text}
              disabled={!isRunning}
          />
          <h4>Time remaining: {timeLeft}</h4>
          <button 
              onClick={startGame}
              disabled={isRunning}
          >
              Start
          </button>
          <h1>{`Word count: ${wordCount} WPM`}</h1>
          <h1>{`Speed: ${wordsPerSecond} words per second`}</h1>
      </div>
  )
}

export default App;
