import "./Styles.css";

import { handleChange } from "../../Func/handleChange";
import { useState } from "react";

const defaultLogin = {
  email: "",
  password: "",
};

const Login = () => {
  const [formLogin, setFormLogin] = useState(defaultLogin);

  const handleSubmitlogin = (event) => {
    console.log(formLogin);
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
        <form onSubmit={handleSubmitlogin} className="form__container">
          <label htmlFor="email" className="texto">
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="texto input__geral"
            onChange={(event) => handleChange(event, setFormLogin, formLogin)}
          />
          <label htmlFor="password" className="texto">
            Senha
          </label>
          <input
            type="text"
            name="password"
            id="password"
            className="texto input__geral"
            onChange={(event) => handleChange(event, setFormLogin, formLogin)}
          />
        </form>
      </section>
    </main>
  );
};

export default Login;
