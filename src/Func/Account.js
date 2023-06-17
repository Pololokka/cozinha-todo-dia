export const defaultReg = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const defaultLogin = {
  email: "",
  password: "",
};

//// FUNC ////

export const createAcc = async (state) => {
  const postData = {
    name: state.name,
    email: state.email,
    password: state.password,
    confirmPassword: state.confirmPassword,
  };

  const connect = await fetch(
    "https://cozinha-todo-dia-api.onrender.com/auth/register",
    {
      method: "POST",
      body: JSON.stringify(postData),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }
  );

  if (!connect.ok) {
    throw new Error("Opa! Não foi possível criar o cadastro!");
  }

  const convertedConnexion = await connect.json();
  return convertedConnexion;
};

export const loginAcc = async (state, useNavigate) => {
  const postData = {
    email: state.email,
    password: state.password,
  };

  const connect = await fetch(
    "https://cozinha-todo-dia-api.onrender.com/auth/login",
    {
      method: "POST",
      body: JSON.stringify(postData),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }
  );

  if (!connect.ok) {
    throw new Error("Opa! Não foi possível fazer o login!");
  } else {
    useNavigate("/recipe/");
  }

  const convertedConnexion = await connect.json();
  return convertedConnexion;
};
