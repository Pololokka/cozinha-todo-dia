import "./Styles.css";

import { useEffect, useState } from "react";
import { getAllRecipes } from "../../Func/API";

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
            {allRecipes?.map((element, index) => {
              return (
                <div key={element._id} className="card__recipe">
                  <p className="subtitulo subtitulo-hover">{element.name}</p>
                  {element.ingredients?.map((item, index) => {
                    return (
                      <p key={index} className="texto">
                        {item}
                      </p>
                    );
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
};

export default Home;
