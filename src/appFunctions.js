
export const getWordsPerSecond = (startTime, wordCount) => (wordCount / startTime).toFixed(2);
export const getWordCount = (text) => {
    const wordsArr = text.trim().split(" ");
    const totalWords = wordsArr.filter(word => word !== " ").length; 
    // setWordCount(totalWords); // pull this out and use countWord then set it.  
    return totalWords; 
  } 

