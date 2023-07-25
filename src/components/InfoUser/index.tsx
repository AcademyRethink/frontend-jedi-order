import './styles.css'
import { titleAndInfo } from '../../types/myAccount'

const InfoUser = ({title, info}: titleAndInfo) => {
  return (
    <div className='containerInfo'>
        <p className='title'>{title}</p>
        <p className='info'>{info}</p>
    </div>
  )
}

export default InfoUser