import './styles.css'
import { ReactNode } from "react";

interface ButtonProps {
  icon?: React.ReactNode;
  text?: string;
  background?: string;
  color?: string;
  onClick?: () => void; 
}

const Button: React.FC<ButtonProps> = ({
  icon,
  text,
  background,
  color,
  onClick, 
}) => {
  return (
    <button
      className="containerButton"
      style={{ backgroundColor: background, color: color }}
      onClick={onClick} 
    >
      <i>{icon}</i> {text}
    </button>
  );
};

export default Button