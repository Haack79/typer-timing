
import React, {useState, useEffect, useRef} from "react"

function App() {
    const startTime = 3; 
    const [text, setText] = useState('');
    const [timeLeft, setTimeLeft] = useState(startTime); 
    const [wordCount, setWordCount] = useState(0); 

    const handleChange = (e) => {
      const {value} = e.target;
      setText(value); 
    }

    const countTheWords = (text) => {
      const wordsArr = text.trim().split(' ');
      return wordsArr.filter(word => word !== ' ').length; 
    } 

    useEffect(() => {
      if (timeLeft > 0) {
        setTimeout(time => {
          setTimeLeft(time => time - 1)}, 1000)
      }

    }, [timeLeft])

    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                // ref={textBoxRef}
                onChange={handleChange}
                value={text}
                // disabled={!isTimeRunning}
            />
            <h4>Time remaining: {timeLeft}</h4>
            <button 
                // onClick={startGame}
                // disabled={isTimeRunning}
            >
                Start
            </button>
            {<h1>Word count: {countTheWords(text)}</h1>}
        </div>
    )
}

export default App
