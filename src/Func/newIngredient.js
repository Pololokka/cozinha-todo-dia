export const handleNewIngredient = (
  setState,
  state,
  ingredient,
  setIngredient
) => {
  if (ingredient) {
    console.log(ingredient);
    setState((prevState) => ({
      ...state,
      ingredients: [...prevState.ingredients, ingredient],
    }));
    console.log(state);
    //setIngredient("");
  }
};
