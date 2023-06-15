import "./Styles.css";

import { useEffect, useState } from "react";
import { getAllRecipes } from "../../Func/API";
import { Link } from "react-router-dom";

const Home = () => {
  const [allRecipes, setAllRecipes] = useState("");

  useEffect(() => {
    getAllRecipes(setAllRecipes);
  }, []);

  if (allRecipes) {
    return (
      <>
        <main>
          <h2 className="subtitulo subtitulo-hover">
            Todas as nossas receitas!
          </h2>
          <section className="recipe__container">
            {allRecipes?.map((element) => {
              return (
                <div key={element._id} className="card__recipe">
                  <p className="subtitulo subtitulo-hover">{element.name}</p>
                  <img
                    src={element.image}
                    alt={element.name}
                    className="recipe__image"
                  />
                  <Link
                    className="texto btn__geral"
                    to={`/recipe/${element._id}`}
                  >
                    Ver Mais!
                  </Link>
                </div>
              );
            })}
          </section>
        </main>
      </>
    );
  }
};

export default Home;
