import TextReader from "../components/TextReader";
import TextTranslated from "../components/TextTranslated";
import Button from "../components/Button";

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
      <Button btnText="Read Aloud" onClickHandler={handleReadAloud} />
      <Button btnText="Clear Text" onClickHandler={clearText} />
    </>
  );
};

export default Page;
