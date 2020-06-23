
import React, {useState, useEffect, useRef} from "react"

function App() {
    const startTime = 3; 
    const [text, setText] = useState('');
    const [timeLeft, setTimeLeft] = useState(startTime); 

    const handleChange = (e) => {
      const {value} = e.target;
      setText(value); 
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
            {/* <h1>Word count: {}</h1> */}
        </div>
    )
}

export default App
