import "./styles.css";
import Input from "../../components/Input";
import useLoginViewController from "./useLoginViewController";
import LoginLoading from "../../components/LoginLoading";

const LoginView = () => {
  const { isLoading, error, handleSubmit } = useLoginViewController();

  if (isLoading) return <LoginLoading />;

  return (
    <div className="containerLogin">
      <div className="loginCard">
        <form className="loginForm" onSubmit={handleSubmit}>
          <h1>Tecnovia</h1>
          <h3>Olá, acesse a sua conta</h3>
          <div className="inputsLogin">
            <div className="emailInput">
              <Input
                name="email"
                placeholder="Digite o seu e-mail"
                type="email"
                label="Email"
                required
                tabIndex={1}
              />
              <p>Ex: emailexemplo@exemplo.com</p>
            </div>
            <Input
              name="senha"
              placeholder="Digite a sua senha"
              type="password"
              label="Senha"
              required
              tabIndex={2}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="login-button-container">
            <button
              className="btn-Login"
              type="submit"
              tabIndex={3}
              aria-label="Entrar na conta"
            >
              Entrar
            </button>
            <a href="#" tabIndex={4}>
              Precisa de Ajuda?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
