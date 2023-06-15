import "./Styles.css";

import { handleChange } from "../../Func/handleChange";
import { createAcc, defaultReg } from "../../Func/Account";
import { useState } from "react";

const Modal = ({ show, handleModal }) => {
  const [formReg, setFormReg] = useState(defaultReg);

  const handleSubmitCreateAcc = (event) => {
    event.preventDefault();
    createAcc(formReg);
    handleModal();
  };

  if (show) {
    return (
      <section className="modal">
        <div className="login__container">
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
        </div>
      </section>
    );
  }
};

export default Modal;
