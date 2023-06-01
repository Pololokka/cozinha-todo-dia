export const postRecipe = async (state) => {
  const postData = {
    name: state.name,
    ingredients: state.ingredients,
    method: state.method,
    image: state.image,
  };

  const connect = await fetch("http://localhost:3000/api/recipes", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });

  if (!connect.ok) {
    throw new Error("Opa! Não foi possível postar a receita!");
  }

  const convertedConnexion = await connect.json();
  return convertedConnexion;
};

export const getAllRecipes = async (setState) => {
  let recipes = await fetch("http://localhost:3000/api/recipes", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
  setState(recipes);
};

export const getRecipe = async (id, setState) => {
  let recipes = await fetch(`http://localhost:3000/api/recipes/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  }).then((res) => res.json());
  setState(recipes);
};

//SUBMIT//

export const defaultRecipe = {
  name: "",
  ingredients: [],
  method: "",
  image: "",
};

export const handleSubmit = async (event, setState, state) => {
  event.preventDefault();
  postRecipe(state);
  setState(defaultRecipe);
};
