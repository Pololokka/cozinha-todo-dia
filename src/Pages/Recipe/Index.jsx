import "./Styles.css";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getRecipe } from "../../Func/API";

const Recipe = () => {
  const [recipe, setRecipe] = useState("");
  const { id } = useParams();

  useEffect(() => {
    getRecipe(id, setRecipe);
  }, []);

  if (recipe) {
    return (
      <>
        <main>
          <h2 className="subtitulo subtitulo-hover">{recipe.name}</h2>
          <section>
            <div className="card__single-recipe">
              <img src={recipe.image} alt={recipe.name} />
              {recipe.ingredients?.map((element, index) => {
                return (
                  <p key={index} className="texto">
                    {element}
                  </p>
                );
              })}
              <p className="texto">{recipe.method}</p>
            </div>
          </section>
        </main>
      </>
    );
  }
};

export default Recipe;
