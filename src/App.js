
import React, {useState, useEffect, useRef} from "react"

function App() {
    const startTime = 60; 
    const [text, setText] = useState(" ");
    const [timeLeft, setTimeLeft] = useState(startTime); 
    const [wordCount, setWordCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false); 
    const [speed, setSpeed] = useState(0);  
    const textBoxRef = useRef(null); 

    const wordsPerSecond = () => {
      return (wordCount / startTime).toFixed(2); 
    }

    const handleChange = (e) => {
      const {value} = e.target;
      setText(value); 
    }

    const countTheWords = (text) => {
      const wordsArr = text.trim().split(" ");
      const totalWords = wordsArr.filter(word => word !== " ").length; 
      setWordCount(totalWords); 
      return totalWords; 
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
    
    const endGame = () => {
      setIsRunning(false);
      setWordCount(countTheWords(text));
      setSpeed(wordsPerSecond());  
    }

    useEffect(() => {
      if (timeLeft > 0 && isRunning) {
        setTimeout(() => {
          setTimeLeft(time => time - 1)
        }, 1000)
      } else if (timeLeft === 0) { 
         endGame();
      }
    }, [timeLeft, isRunning])

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
            <h1>{`Speed: ${speed} words per second`}</h1>
        </div>
    )
}

export default App;
