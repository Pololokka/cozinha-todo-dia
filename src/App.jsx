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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(recipeForm);
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
      </main>
    </>
  );
}

export default App;
