const Button = ({ btnText, onClickHandler }) => {
  return <button onClick={onClickHandler}>{btnText}</button>;
};

export default Button;
