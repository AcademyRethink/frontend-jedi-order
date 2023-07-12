import "./styles.css";
import Input from "../../components/Input";

const LoginScreen = () => {
  return (
    <div className="containerLogin">
      <div className="loginCard">
        <form className="loginForm">
          <h1>Olá, acesse a sua conta </h1>
          <div className="emailInput">
            <Input
              name="email"
              placeholder="Digite o seu e-mail"
              type= "email"
              label="Email"
              required
            />
            <p>Ex: emailexemplo@hotmail.com</p>

          </div>
          <Input
            name='Senha'
            placeholder='Digite a sua senha'
            type='password'
            label="Senha"
            required
          />
          <div className="button">
            <button className="btn-Login" type="submit">Entrar</button>
            <a href="">Precisa de ajuda?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
