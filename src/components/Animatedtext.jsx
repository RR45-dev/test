import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const japaneseChars = ["あ", "お", "う", "え", "い", "さ", "し", "す", "せ", "そ"];
const englishText = "RR45-dev";

const AnimatedText = () => {
  const [text, setText] = useState(
    englishText.split("").map(() => japaneseChars[Math.floor(Math.random() * japaneseChars.length)])
  );
  const [isVisible, setIsVisible] = useState(false); // Track visibility
  const textRef = useRef(null);

  const updateLetter = (index) => {
    let letterChanges = 0;
    const letterInterval = setInterval(() => {
      setText((prevText) => {
        const newText = [...prevText];
        newText[index] =
          letterChanges < 4
            ? japaneseChars[Math.floor(Math.random() * japaneseChars.length)] // Random Japanese letter
            : englishText[index]; // Final English letter

        return newText;
      });

      letterChanges++;
      if (letterChanges > 4) {
        clearInterval(letterInterval);
      }
    }, 350); // Time between character changes
  };

  // IntersectionObserver to detect when the text comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when element is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current); // Cleanup observer
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      englishText.split("").forEach((_, i) => {
        setTimeout(() => {
          updateLetter(i);
        }, i * 200); // Start after the previous letter transitions halfway
      });
    }
  }, [isVisible]);

  return (
    <div
      ref={textRef}
      className="flex items-center justify-center bg-gray-900 text-white text-xl font-bold"
       // Optional: Ensure the section has full height
    >
      {text.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className="inline-block"
          style={{
            fontFamily: "monospace", // Ensure each letter has the same width
            width: "1em", // Fixed width to ensure equal space
            letterSpacing: "0", // No extra spacing between characters
            margin: "0", // Ensure no margin is added between characters
            padding: "0", // Ensure no padding is added
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
