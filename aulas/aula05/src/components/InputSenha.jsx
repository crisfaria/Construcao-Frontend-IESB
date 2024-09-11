function InputSenha(props) {
  return (
    <>
      <label htmlFor="Senha">{props.texto}</label>
      <input
        type="password"
        id="Senha"
        name="Senha"
        onChange={(e) => {
          props.mudaValor(e.target.value);
        }}
      />
    </>
  );
}

export default InputSenha;
