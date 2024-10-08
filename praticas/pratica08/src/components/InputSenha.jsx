function InputSenha(props) {
  const regras = {
    required: "A Senha é Obrigatória!",
    minLength: {
      value: 6,
      message: "A Senha deve conter no mínimo 6 caractéres",
    },
  };
  return (
    <>
      <label htmlFor="senha">Senha</label>
      <input type="password" {...props.register("senha", regras)} />
      {props.error && <p>{props.error.message}</p>}
    </>
  );
}

export default InputSenha;
