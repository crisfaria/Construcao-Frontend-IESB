function InputEmail(props) {
  return (
    <>
      <label htmlFor="Email">{props.texto}</label>
      <input
        type="email"
        id="Email"
        name="Email"
        value={props.valor}
        onChange={(e) => {
          props.mudaValor(e.target.value);
        }}
      />
    </>
  );
}

export default InputEmail;
