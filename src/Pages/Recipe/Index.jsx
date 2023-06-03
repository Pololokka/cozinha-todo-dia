import "./Styles.css";

import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { getRecipe } from "../../Func/API";

const Recipe = () => {
  const [recipe, setRecipe] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getRecipe(id, setRecipe);
  }, []);

  const handleDelete = async () => {
    const connect = await fetch(`http://localhost:3000/api/recipes/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    if (connect.status === 200) {
      navigate("/");
    }
  };

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
            <Link
              className="texto btn__geral"
              to={`/recipe/update/${recipe._id}`}
            >
              Atualizar Receita
            </Link>

            <input
              type="button"
              value="Deletar Receita"
              className="texto btn__geral btn__delete"
              onClick={handleDelete}
            />
          </section>
        </main>
      </>
    );
  }
};

export default Recipe;
