import { useState } from "react";

const TextReader = ({text, onTextChange}) => {
    const handleChange = (event) => {
        onTextChange(event.target.value);
      };

  return (
    <>
      <textarea
        value={text}
        onChange={handleChange}
        rows="10"
        cols="50"
        placeholder="Enter text here..."
      ></textarea>
    </>
  );
};

export default TextReader;
