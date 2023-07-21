import './styles.css'
import SideBar from '../../components/SideBar';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Input from '../../components/Input';
import Button from '../../components/Button';

const ChangePasswordView = () => {
  return (
    <div className='containerChangePassword'>
        <SideBar/>
        <div className="changePasswordView">
            <div className="throwback">
                <i><ArrowBackIosIcon/></i>
                <a href="/minhaConta">Voltar</a>
            </div>
            <div className="changePassword">
                <div className="changePasswordTitle">
                    <h1>Altere a senha</h1>
                    <p>Deixe sua conta mais segura através de uma senha única.</p>
                </div>
                <div className="changePasswordInput">
                    <Input
                        type='password'
                        name='actualPassword' 
                        label={'Senha atual'} 
                        placeholder='Digite a sua senha atual' 
                        required
                        tabIndex={0}
                    />
                    <Input
                        type='password'
                        name='newPassword' 
                        label={'Nova senha'} 
                        placeholder='Digite a sua nova senha' 
                        required
                        tabIndex={0}
                    />
                    <Input
                        type='password'
                        name='newPasswordConfirm' 
                        label={'Nova senha'} 
                        placeholder='Confirme a sua nova senha' 
                        required
                        tabIndex={0}
                    />
                    <div className="buttons">
                        <Button text='Salvar' background='#461901'/>
                        <Button text='Cancelar' background='transparent' color='#602809'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChangePasswordView