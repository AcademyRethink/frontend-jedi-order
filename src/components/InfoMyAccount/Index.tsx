import "./styles.css";
import Line from "../../components/Line";
import InfoUser from "../../components/InfoUser";
import TitleAndInformation from "../TitleAndInformation";
import ImageAndWriting from "../ImageAndWriting";
import { User } from "../../types/user";
import { useNavigate } from "react-router-dom";

const InfoMyAccount = ({
  userConnected,
  userId,
}: {
  userConnected: User | undefined;
  userId: string | undefined;
}) => {
  const navigate = useNavigate();
  const handleChangePasswordButtonClick = () => {
    navigate("/trocar-senha");
  };

  if (userConnected === undefined || userId === undefined) return null;

  return (
    <div className="containerMyAccountInfo">
      <div className="myAccountInfo">
        <TitleAndInformation
          title="Informações"
          info="Dados gerais sobre a conta. Para realizar mais alterações, procure a gerência."
        />
        <div className="containerInfoUser">
          <InfoUser title="Nome" info={userConnected.name} />
          <InfoUser title="Cargo" info="Controlador" />
          <InfoUser title="E-mail" info={userConnected.email} />
          <div className="passwordCamp">
            <InfoUser title="Senha" info="********" />
            <button
              className="my-account-change-password-button"
              onClick={() => handleChangePasswordButtonClick()}
            >
              Alterar Senha
            </button>
          </div>
        </div>
      </div>

      <div className="containerPlanInfo">
        <Line />
        <div className="myAccountInfo">
          <TitleAndInformation
            title="Plano Contratado"
            info="Informações gerais sobre o plano contratado."
          />

          <div className="infoPlan">
            <div className="statusPlan">
              <p>Situação Atual</p>
              {userConnected.active ? (
                <ImageAndWriting
                  icon="check_circle"
                  label="Conta ativada"
                  color="tertiary"
                  fontSize="1.6rem"
                />
              ) : (
                <ImageAndWriting
                  icon="check_circle"
                  label="Conta desativada"
                  color="tertiary"
                  fontSize="1.6rem"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Line />
    </div>
  );
};

export default InfoMyAccount;
