function InputNome(props) {
  const regras = {
    required: "Nome é Obrigatório!",
    minLength: {
      value: 2,
      message: "O Nome deve ter até 100 caractéres!",
    },
  };
  return (
    <>
      <label htmlFor="nome">Nome</label>
      <input type="text" {...props.register("nome", regras)} />
      {props.error && <p>{props.error.message}</p>}
    </>
  );
}

export default InputNome;
