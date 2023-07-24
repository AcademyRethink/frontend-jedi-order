import "./styles.css";
import Line from "../../components/Line";
import InfoMyAccount from "../../components/InfoMyAccount/Index";
import Button from "../../components/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import Modal from "../../components/Modal";
import useMyAccountView from "./useMyAccountView";

const MyAccountView = () => {
  const icon = <LogoutIcon />;
  const { handleLogout, closeModal, openModal, user, userId, isModalOpen } =
    useMyAccountView();

  return (
    <div className="myAccountView">
      <div className="containerMyAccount">
        <div className="headerMyAccount">
          <h1>Minha Conta</h1>
          <p>Gerencie sua conta e visualize as suas informações</p>
        </div>
        <Line />
        <InfoMyAccount userConnected={user} userId={userId} />
        {isModalOpen && <div className="modalOverlay"></div>}
        {isModalOpen && (
          <Modal
            label="Você tem certeza que deseja sair?"
            text="Sair"
            fontSize="2.4rem"
            showTwoButtons={true}
            background="#461901"
            color="#FFF7F2"
            paragraph="Após confirmar, você irá retornar para a página de acessar a conta."
            onClick={handleLogout}
            onClickSecondButton={closeModal}
            textSecondButton="Cancelar"
            backgroundSecondButton="transparent"
            colorSecondButton="#602809"
            aria-label="Modal de Confirmação de Logout"
          />
        )}
        <Button
          icon={icon}
          text="Sair da conta"
          onClick={openModal}
          aria-label="Botão Sair da Conta"
        />
      </div>
    </div>
  );
};

export default MyAccountView;
