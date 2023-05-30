import "./App.css";

import { useState } from "react";
import Input from "./Components/Input/Index";

import { handleSubmit, defaultRecipe, getAllRecipes } from "./Func/API";
import { handleChange, handleChangeIngredient } from "./Func/handleChange";
import { handleNewIngredient } from "./Func/newIngredient";

function App() {
  const [recipeForm, setRecipeForm] = useState(defaultRecipe);
  const [allRecipes, setAllRecipes] = useState();
  const [ingredient, setIngredient] = useState("");

  return (
    <>
      <main>
        <h1 className="titulo titulo-hover">Cadastro de Receita</h1>
        <form
          onSubmit={(event) => handleSubmit(event, setRecipeForm, recipeForm)}
          className="form__container"
        >
          <Input
            title="Nome da Receita"
            name="name"
            value={recipeForm.name}
            handleChange={(event) =>
              handleChange(event, setRecipeForm, recipeForm)
            }
          />

          <Input
            title="Ingredientes da Receita"
            name="ingredients"
            value={ingredient}
            handleChange={(event) =>
              handleChangeIngredient(event, setIngredient)
            }
          />
          <input
            type="button"
            value="Incluir Ingrediente!"
            className="texto btn__geral"
            onClick={() =>
              handleNewIngredient(
                setRecipeForm,
                recipeForm,
                ingredient,
                setIngredient
              )
            }
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
            onChange={(event) => handleChange(event, setRecipeForm, recipeForm)}
            className="texto input__geral"
          ></textarea>
          <Input
            title="Imagem da Receita"
            name="image"
            value={recipeForm.image}
            handleChange={(event) =>
              handleChange(event, setRecipeForm, recipeForm)
            }
          />

          <input
            type="submit"
            value="Cadastrar Receita!"
            className="texto btn__geral"
          />
        </form>

        <input
          type="button"
          value="teste de api"
          onClick={() => getAllRecipes(setAllRecipes)}
        />

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
