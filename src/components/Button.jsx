const Button = ({ btnText, onClickHandler, icon }) => {
  return <button onClick={onClickHandler}>{icon} {btnText}</button>;
};

export default Button;
