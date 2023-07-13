import { InputProps } from "../../types/login"
import './styles.css'
import { useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const Input : React.FC<InputProps>= ({name, placeholder,type, required, label}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="inputCamp">
      <label htmlFor={name}>{label}</label> 
      <div className="customInput">
        <input
        name={name}
        placeholder={placeholder}
        type= {type === 'password' ? (showPassword ? 'text' : 'password') : type}
        required={required} />

        {type === 'password' && (
            <i
              onClick={() => setShowPassword(!showPassword)}
            >{showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </i>
        )}
        </div>
    
    </div>

  )
}

export default Input