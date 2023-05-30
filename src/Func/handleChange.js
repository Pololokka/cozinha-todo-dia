export const handleChange = (event, setState, state) => {
  const name = event.target.name;
  const value = event.target.value;

  setState({ ...state, [name]: value });
};

export const handleChangeIngredient = (event, setState) => {
  const value = event.target.value;

  setState(value);
};
