import "./Styles.css";

import { handleChange } from "../../Func/handleChange";
import { defaultLogin, loginAcc } from "../../Func/Account";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../Components/Modal/Index";

const Login = () => {
  const [formLogin, setFormLogin] = useState(defaultLogin);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  document.title = "Cozinha todo dia - Login";

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    loginAcc(formLogin, navigate);
  };

  const handleModal = () => {
    setShow(!show);
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

        <input
          type="button"
          value="Criar Conta!"
          className="texto btn__geral"
          onClick={handleModal}
        />
      </section>

      <Modal show={show} handleModal={handleModal} />
    </main>
  );
};

export default Login;
