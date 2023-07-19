import './styles.css'
import LogoutIcon from '@mui/icons-material/Logout';

const ButtonLogout = () => {
  return (
    <button className='logoutButton'>
       <i><LogoutIcon/></i> Sair da conta
    </button>
  )
}

export default ButtonLogout