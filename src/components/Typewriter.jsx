import React, { useEffect, useState } from "react";

const Typewriter = ({ words = [], typingSpeed = 100, deletingSpeed = 50, delay = 1400, className = "" }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;
    let timeout;
    const current = index % words.length;
    const fullText = words[current];

    if (!isDeleting && text === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        const next = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(next);
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words, typingSpeed, deletingSpeed, delay]);

  return (
    <span className={className}>
      <span className='text-white-100'>{text}</span>
      <span className='ml-1 text-white animate-pulse'>|</span>
    </span>
  );
};

export default Typewriter;
