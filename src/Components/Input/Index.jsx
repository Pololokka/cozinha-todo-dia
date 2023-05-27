const Input = ({ title, name, value, handleChange }) => {
  return (
    <>
      <label className="subtitulo subtitulo-hover">{title}</label>
      <input
        type="text"
        className="texto input__geral"
        name={name}
        value={value || ""}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
