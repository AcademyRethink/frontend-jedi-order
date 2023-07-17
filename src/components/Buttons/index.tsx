import "./styles.css";
import ButtonProps from "../../types/buttons";

const Button = ({ type, text, link }: ButtonProps) => {
  return (
    <a href={link}>
      <button className={type}>{text}</button>
    </a>
  );
};

export default Button;
