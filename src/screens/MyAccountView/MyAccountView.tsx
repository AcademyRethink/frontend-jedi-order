import './styles.css'
import SideBar from '../../components/SideBar'
import Line from '../../components/Line'
import InfoMyAccount from '../../components/InfoMyAccount/Index'
import Button from '../../components/Button'
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate  } from 'react-router-dom';

const MyAccountView = () => {
  const icon = <LogoutIcon/>;
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    navigate('/usuario/login');
  }
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
            <Button icon={icon} text='Sair da conta' onClick={handleLogout}/>
        </div>
   </div>
  )
}

export default MyAccountView