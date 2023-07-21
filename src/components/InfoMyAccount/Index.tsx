import './styles.css'
import Line from '../../components/Line'
import InfoUser from '../../components/InfoUser'
import TitleAndInformation from '../TitleAndInformation'
import ImageAndWriting from '../ImageAndWriting'
import {useEffect,useState} from 'react'
import { getUserById } from '../../model/api/myAccount'
import { User } from "../../types/user";

const InfoMyAccount = () => {
    const [userId, setUserId] = useState('');
    const [user, setUser] = useState<User>({name: "", email: "", permission: false, active:true, password: "" })

    useEffect(() => {
        const id = localStorage.getItem("id");
        setUserId(id ?? '');
        getUserById(id)
        .then((resp) => {
          setUser(resp);
      })
    }, [user]);

  return (
    <div className='containerMyAccountInfo'>
      <div className="myAccountInfo">
            <TitleAndInformation 
            title='Informações' 
            info='Dados gerais sobre a conta. Para realizar mais alterações, procure a gerência.'
            />
            <div className="containerInfoUser">
                <InfoUser title='Nome' info={user.name}/>
                <InfoUser title='Cargo' info='Controlador'/>
                <InfoUser title='E-mail' info={user.email}/>
                <div className="passwordCamp">
                    <InfoUser title='Senha' info='********'/>
                    <a href={`/alterarSenha/${userId}`}>Alterar Senha</a>
                </div>
            </div>
        </div>
        
        <div className="containerPlanInfo">
            <Line/>
            <div className="myAccountInfo">
                <TitleAndInformation 
                    title='Plano Contratado' 
                    info='Informações gerais sobre o plano contratado.'
                    />
               
                <div className="infoPlan">
                    <div className="statusPlan">
                    <p>Situação Atual</p>
                    {user.active ? (
                        <ImageAndWriting icon='check_circle' label='Conta ativada' color='tertiary'/>
                    ):
                    (<ImageAndWriting icon='check_circle' label='Conta desativada' color='tertiary'/>)} 
                    </div>
                </div>
                
            </div>  
        </div>
        <Line/>
    </div>
  )
}

export default InfoMyAccount