export const handleNewIngredient = (
  setState,
  state,
  ingredient,
  setIngredient
) => {
  setState((prevState) => ({
    ...state,
    ingredients: [...prevState.ingredients, ingredient],
  }));
  setIngredient("");
};
