import './styles.css'
import Line from '../../components/Line'
import InfoUser from '../../components/InfoUser'
import TitleAndInformation from '../TitleAndInformation'
import ImageAndWriting from '../ImageAndWriting'

const InfoMyAccount = () => {
  return (
    <div className='containerMyAccountInfo'>
      <div className="myAccountInfo">
            <TitleAndInformation 
            title='Informações' 
            info='Dados gerais sobre a conta. Para realizar mais alterações, procure a gerência.'
            />
            <div className="containerInfoUser">
                <InfoUser title='Nome' info='Rodrigo Rocha'/>
                <InfoUser title='Cargo' info='Controlador'/>
                <InfoUser title='E-mail' info='rodrigorocha@hotmail.com'/>
                <div className="passwordCamp">
                    <InfoUser title='Senha' info='****'/>
                    <a href="">Alterar Senha</a>
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
                        <ImageAndWriting icon='check_circle' label='Conta ativada' color='tertiary'/>
                    </div>
                </div>
            </div>  
        </div>
        <Line/>

    </div>
  )
}

export default InfoMyAccount