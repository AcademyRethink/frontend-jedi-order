import "./styles.css";
import Input from "../../components/Input";
import useLoginViewController from "./useLoginViewController";

const LoginView = () => {
  const { handleSubmit, error } = useLoginViewController();

  return (
    <div className="containerLogin">
      <div className="loginCard">
        <form className="loginForm" onSubmit={handleSubmit}>
          <h1>Tecnovia </h1>
          <h3>Olá, acesse a sua conta</h3>
          <div className="inputsLogin">
            <div className="emailInput">
              <Input
                name="email"
                placeholder="Digite o seu e-mail"
                type="email"
                label="Email"
                required
                tabIndex={0}
              />
              <p>Ex: emailexemplo@exemplo.com</p>
            </div>
            <Input
              name="senha"
              placeholder="Digite a sua senha"
              type="password"
              label="Senha"
              required
              tabIndex={0}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="button">
            <button className="btn-Login" type="submit" tabIndex={0}>
              Entrar
            </button>
            <a href="" tabIndex={0}>
              Precisa de Ajuda?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
