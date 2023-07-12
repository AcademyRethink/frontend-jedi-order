import { InputProps } from "../../types/login"
import './styles.css'

const Input : React.FC<InputProps>= ({name, placeholder,type, required, label}) => {
  return (
    <div className="inputCamp">
      <label htmlFor={name}>{label}</label> 
      <input className="customInput" 
      name={name}
      placeholder={placeholder}
      type={type}
      required={required} />
    </div>

  )
}

export default Input