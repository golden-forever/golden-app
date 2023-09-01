import React, { useState, useEffect } from "react";
type Props = { text: string; delay: number; setFinished: () => void };
const Typewriter = ({ text, delay, setFinished }: Props) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (text.length !== 0 && currentIndex === text.length) setFinished();
  }, [currentIndex, delay, text]);

  // Typing logic goes here

  return <span>{currentText}</span>;
};

export default Typewriter;
