import './styles.css'
import SideBar from '../../components/SideBar'
import Line from '../../components/Line'
import InfoMyAccount from '../../components/InfoMyAccount/Index'
import ButtonLogout from '../../components/ButtonLogout'

const MyAccountView = () => {
  return (
   <div className='myAccountView'>
        <SideBar/>
        <div className="containerMyAccount">
            <div className="headerMyAccount">
                <h1>Minha Conta</h1>
                <p>Gerencie sua conta e visualize as suas informações </p>
            </div>
            <Line/>
            <InfoMyAccount/>
            <ButtonLogout/>
        </div>
        
   </div>
  )
}

export default MyAccountView