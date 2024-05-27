import TextReader from "../components/TextReader";
import TextTranslated from "../components/TextTranslated";
import Button from "../components/Button";
import { FaVolumeUp } from 'react-icons/fa';
import { FaSync } from 'react-icons/fa';

import { useState } from "react";

const Page = () => {
  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    setText(newText);
  };

  const handleReadAloud = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Your browser does not support speech synthesis.");
    }
  };

  const clearText = () => {
    setText("");
  };

  return (
    <>
      <TextReader
        text={text}
        onTextChange={handleTextChange}
        // onReadAloud={handleReadAloud}
      />
      {/* <TextTranslated text={text}/> */}
      <div>
        <Button btnText="Read Aloud" icon={<FaVolumeUp/>} onClickHandler={handleReadAloud} />
        <Button btnText="Clear Text" icon={<FaSync/>} onClickHandler={clearText} />
      </div>
    </>
  );
};

export default Page;
