import {useState, useRef, useEffect} from "react";

const getWordsPerSecond = (startTime, wordCount) => (wordCount / startTime).toFixed(2);
const getWordCount = (text) => {
    const wordsArr = text.trim().split(" ");
    const totalWords = wordsArr.filter(word => word !== " ").length; 
// setWordCount(totalWords); // pull this out and use countWord then set it.  
    return totalWords; 
} 
function useGamePlay(startTime = 30) {

    // const startTime = 10; // this is called derived state
    const [text, setText] = useState(" ");
    const [timeLeft, setTimeLeft] = useState(startTime); 
    // const [wordCount, setWordCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false); 
    
    const textBoxRef = useRef(null); 

    function handleChange(e) {
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
    return {
        isRunning,
        startGame,
        timeLeft,
        wordCount, 
        wordsPerSecond, 
        getWordCount, 
        getWordsPerSecond, 
        text, 
        textBoxRef, 
        handleChange
    
    }
}

export default useGamePlay