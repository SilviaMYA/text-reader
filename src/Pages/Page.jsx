import { FaVolumeUp, FaSync } from 'react-icons/fa';
import { useState } from "react";

import TextReader from "../components/TextReader";
import TextTranslated from "../components/TextTranslated";
import Button from "../components/Button";

const Page = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

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

  const handleTranslate = async () => {
    const translated = await translateText(text);
    setTranslatedText(translated);
  };


  const clearText = () => {
    setText("");
  };

  const translateText = async (text) => {
    try {
      const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;
      const $url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

      const response = await fetch($url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          q: text,
          source: 'auto',
          target: 'es',
          format: 'text'
        }),
      });
      const data = await response.json();
      return data.translatedText;
    } catch (err) {
      console.error(err);
      return 'Translation error';
    }
  };
  

  return (
    <>
      <TextReader
        text={text}
        onTextChange={handleTextChange}
        // onReadAloud={handleTranslate}
      />
      <div>
        {/* <Button btnText="Translate" icon={<FaVolumeUp/>} onClickHandler={handleTranslate} /> */}
        <Button btnText="Read Aloud" icon={<FaVolumeUp/>} onClickHandler={handleReadAloud} />
        <Button btnText="Clear Text" icon={<FaSync/>} onClickHandler={clearText} />
      </div>
      {/* <TextTranslated text={translatedText}/> */}
    </>
  );
};

export default Page;
