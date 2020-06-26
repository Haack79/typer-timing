
import React, {useState, useEffect, useRef} from "react"
const getWordsPerSecond = (startTime, wordCount) => (wordCount / startTime).toFixed(2);
const getWordCount = (text) => {
  const wordsArr = text.trim().split(" ");
  const totalWords = wordsArr.filter(word => word !== " ").length; 
  // setWordCount(totalWords); // pull this out and use countWord then set it.  
  return totalWords; 
}  
const App = () => {
    const startTime = 10; // this is called derived state
    const [text, setText] = useState(" ");
    const [timeLeft, setTimeLeft] = useState(startTime); 
    // const [wordCount, setWordCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false); 
                      // gameState
    // const [speed, setSpeed] = useState(0);  
    
    const textBoxRef = useRef(null); 

    const handleChange = (e) => {
      const {value} = e.target;
      setText(value);
      // setWordCount(countTheWords(value)) -moved this outside the component. 
    }

    const startGame = () => { 
      // have to set textboxref disabled to false or it won't let me focus on the textbox area
      // it's a weird bug, not sure how else to handle it. 
      textBoxRef.current.disabled = false;
      textBoxRef.current.focus(); 
      setTimeLeft(startTime); 
      setIsRunning(true); 
      setText('');
    }
    const decrementTime = () => {
      setTimeLeft(time => time - 1);
    }
    useEffect(() => {
      if (timeLeft > 0 && isRunning) {
        setTimeout(decrementTime, 1000)
      } else if (timeLeft === 0) { 
          setIsRunning(false);
      }
    }, [timeLeft, isRunning])
const wordCount  = getWordCount(text); 
const wordsPerSecond = getWordsPerSecond(startTime, wordCount);
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
