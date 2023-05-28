import "./App.css";

import { useState } from "react";
import Input from "./Components/Input/Index";

const defaultRecipe = {
  name: "",
  ingredients: [],
  method: "",
  image: "",
};

function App() {
  const [recipeForm, setRecipeForm] = useState(defaultRecipe);
  const [allRecipes, setAllRecipes] = useState();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setRecipeForm({ ...recipeForm, [name]: value });
  };

  const handleChangeArray = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    let valueConverted = [];

    valueConverted.push(value);

    setRecipeForm({ ...recipeForm, [name]: valueConverted });
  };

  const postRecipe = async () => {
    const postData = {
      name: recipeForm.name,
      ingredients: recipeForm.ingredients,
      method: recipeForm.method,
      image: recipeForm.image,
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

  const getAllRecipes = async () => {
    let recipes = await fetch("http://localhost:3000/api/recipes", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }).then((res) => res.json());
    setAllRecipes(recipes);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(recipeForm);
    postRecipe();
  };

  return (
    <>
      <main>
        <h1 className="titulo titulo-hover">Cadastro de Receita</h1>
        <form onSubmit={handleSubmit} className="form__container">
          <Input
            title="Nome da Receita"
            name="name"
            value={recipeForm.name}
            handleChange={handleChange}
          />
          <Input
            title="Ingredientes da Receita"
            name="ingredients"
            value={recipeForm.ingredients}
            handleChange={handleChangeArray}
          />
          {recipeForm.ingredients?.map((element, index) => {
            return (
              <p key={index} className="texto">
                {element}
              </p>
            );
          })}
          <label className="subtitulo subtitulo-hover">Método de Preparo</label>
          <textarea
            name="method"
            cols="30"
            rows="10"
            value={recipeForm.method || ""}
            onChange={handleChange}
            className="texto input__geral"
          ></textarea>
          <Input
            title="Imagem da Receita"
            name="image"
            value={recipeForm.image}
            handleChange={handleChange}
          />

          <input
            type="submit"
            value="Cadastrar Receita!"
            className="texto btn__geral"
          />
        </form>

        <input type="button" value="teste de api" onClick={getAllRecipes} />

        <section className="recipe__container">
          {allRecipes?.map((element) => {
            return (
              <div className="card__recipe">
                <p className="subtitulo subtitulo-hover">{element.name}</p>
                {element.ingredients?.map((item) => {
                  return <p className="texto">{item}</p>;
                })}
                <p className="texto">{element.method}</p>
                <img src={element.image} alt={element.name} />
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}

export default App;
