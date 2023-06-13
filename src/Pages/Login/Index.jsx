import "./Styles.css";

import { handleChange } from "../../Func/handleChange";
import {
  defaultReg,
  defaultLogin,
  createAcc,
  loginAcc,
} from "../../Func/Account";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formLogin, setFormLogin] = useState(defaultLogin);
  const [formReg, setFormReg] = useState(defaultReg);
  const navigate = useNavigate();

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    loginAcc(formLogin, navigate);
    console.log(formLogin);
  };

  const handleSubmitCreateAcc = (event) => {
    event.preventDefault();
    createAcc(formReg);
  };

  return (
    <main className="main-login__container">
      <section>
        <h1 className="titulo titulo-hover">
          Seja bem-vindo ao seu caderninho de receitas!
        </h1>
        <h2 className="subtitulo subtitulo-hover">
          Com o Cozinha Todo Dia você vai poder ficar atualizado sobre suas
          receitas de maneira muito mais prática e simples!
        </h2>
        <p className="texto">
          Para ver as receitas já cadastradas, ou cadastrar as suas, basta fazer
          login abaixo!
        </p>
        <p className="texto">
          Não tem login? Muito fácil! Aqui em baixo você também consegue achar
          como fazer o seu cadastro!
        </p>
      </section>

      <section className="login__container">
        <form onSubmit={handleSubmitLogin} className="form__container">
          <label htmlFor="email" className="texto">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="texto input__geral"
            onChange={(event) => handleChange(event, setFormLogin, formLogin)}
          />
          <label htmlFor="password" className="texto">
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="texto input__geral"
            onChange={(event) => handleChange(event, setFormLogin, formLogin)}
          />

          <input type="submit" value="Entrar!" className="texto btn__geral" />
        </form>
      </section>

      <section className="login__container">
        <form onSubmit={handleSubmitCreateAcc} className="form__container">
          <label htmlFor="name" className="texto">
            Usuário
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="texto input__geral"
            onChange={(event) => handleChange(event, setFormReg, formReg)}
          />

          <label htmlFor="emailReg" className="texto">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="emailReg"
            className="texto input__geral"
            onChange={(event) => handleChange(event, setFormReg, formReg)}
          />

          <label htmlFor="passwordReg" className="texto">
            Senha
          </label>
          <input
            type="password"
            name="password"
            id="passwordReg"
            className="texto input__geral"
            onChange={(event) => handleChange(event, setFormReg, formReg)}
          />

          <label htmlFor="confirmPasswordReg" className="texto">
            Confirme sua senha
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPasswordReg"
            className="texto input__geral"
            onChange={(event) => handleChange(event, setFormReg, formReg)}
          />

          <input
            type="submit"
            value="Cadastrar!"
            className="texto btn__geral"
          />
        </form>
      </section>
    </main>
  );
};

export default Login;
