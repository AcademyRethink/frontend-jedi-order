import { titleAndInfo } from "../../types/myAccount"
import './styles.css'

const TitleAndInformation = ({title, info}: titleAndInfo) => {
  return (
    <div className="infoAccount">
        <h4>{title}</h4>
        <p>{info}</p>
    </div>
  )
}

export default TitleAndInformation