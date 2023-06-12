export const defaultReg = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const createAcc = async (state, setState) => {
  const postData = {
    name: state.name,
    email: state.email,
    password: state.password,
    confirmPassword: state.confirmPassword,
  };

  const connect = await fetch("http://localhost:3000/auth/register", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });

  if (!connect.ok) {
    throw new Error("Opa! Não foi possível criar o cadastro!");
  }

  const convertedConnexion = await connect.json();
  setState(defaultReg);
  return convertedConnexion;
};
