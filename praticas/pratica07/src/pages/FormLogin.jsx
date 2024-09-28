import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputEmail from "../compnents/InputEmail";
import InputSenha from "../compnents/InputSenha";
import Botao from "../compnents/Botao";

function FormLogin() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const navigate = useNavigate();
  return (
    <form>
      <InputEmail valor={email} mudaValor={(e) => setEmail(e.target.value)} />
      <InputSenha valor={senha} mudaValor={(e) => setSenha(e.target.value)} />
      <Botao texto="Entrar" aoClicar={() => navigate("/home")} />
    </form>
  );
}

export default FormLogin;
