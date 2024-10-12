import Styled from "./index.module.css";

function Button({ name, className = "button", onClick = () => {} }) {
  return (
    <button className={Styled[className]} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;