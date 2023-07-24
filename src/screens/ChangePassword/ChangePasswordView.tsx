import "./styles.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import useChangePassword from "./useChangePassword";
import { useNavigate } from "react-router-dom";

const ChangePasswordView = () => {
  const {
    handleSubmit,
    closeModal,
    errorMessage,
    isModalOpen,
    cancelSolicitation,
  } = useChangePassword();
  const navigate = useNavigate();

  const handleGoBackButton = () => {
    navigate("/minha-conta");
  };

  return (
    <div className="containerChangePassword">
      <div className="changePasswordView">
        {isModalOpen && <div className="modalOverlay"></div>}
        {isModalOpen && (
          <Modal
            label="Senha alterada com sucesso."
            text="Fechar"
            fontSize="2.4rem"
            showTwoButtons={false}
            background="#461901"
            color="#FFF7F2"
            paragraph="Você receberá uma notificação por e-mail sobre a sua redefinição."
            onClick={closeModal}
          />
        )}
        <button
          className="throwback change-password-go-back-button"
          onClick={() => handleGoBackButton()}
        >
          <i>
            <ArrowBackIosIcon />
          </i>
          <h4>Voltar</h4>
        </button>
        <div className="changePassword">
          <div className="changePasswordTitle">
            <h1>Altere a senha</h1>
            <p>Deixe sua conta mais segura através de uma senha única.</p>
          </div>
          <form className="changePasswordInput" onSubmit={handleSubmit}>
            <Input
              type="password"
              name="actualPassword"
              label={"Senha atual"}
              placeholder="Digite a sua senha atual"
              required
              tabIndex={0}
            />
            <Input
              type="password"
              name="newPassword"
              label={"Nova senha"}
              placeholder="Digite a sua nova senha"
              required
              tabIndex={0}
            />
            <Input
              type="password"
              name="newPasswordConfirm"
              label={"Nova senha"}
              placeholder="Confirme a sua nova senha"
              required
              tabIndex={0}
            />
            {errorMessage && <p className="error">{errorMessage}</p>}

            <div className="change-password-buttons">
              <Button text="Salvar" background="#461901" />
              <Button
                text="Cancelar"
                background="transparent"
                color="#602809"
                onClick={cancelSolicitation}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordView;
