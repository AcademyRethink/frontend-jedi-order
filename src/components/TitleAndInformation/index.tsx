import { titleAndInfo } from "../../types/myAccount"
import './styles.css'

const TitleAndInformation = ({title, info}: titleAndInfo) => {
  return (
    <div className="titleAndInfo">
        <h4>{title}</h4>
        <p className="customInfo">{info}</p>
    </div>
  )
}

export default TitleAndInformation