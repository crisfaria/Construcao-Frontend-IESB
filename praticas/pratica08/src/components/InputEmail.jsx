function InputEmail(props) {
  const regras = {
    required: "Email é Obrigatório!",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Formato de Email Inválido!",
    },
  };
  return (
    <>
      <label htmlFor="email">Email</label>
      <input type="email" {...props.register("email", regras)} />
      {props.error && <p>{props.error.message}</p>}
    </>
  );
}

export default InputEmail;
