
const TextTranslated = (props) => {
  return (
      <textarea
        value={props.text}
        rows="10"
        cols="50"
        readOnly="readonly"
      />
  );
};

export default TextTranslated;
