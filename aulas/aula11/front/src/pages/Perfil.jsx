import Menu from "../components/Menu";
import Formulario from "./Formulario";
import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

function Perfil() {
  const [msg, setMsg] = useState("");
  const { usuario, atualizar } = useContext(AuthContext);
  const { id } = useParams();

  const onEnviar = async (data) => {
    const erro = await atualizar({ id, ...data });
    if (erro) {
      setMsg(erro);
    } else {
      setMsg("Dados atualizados com sucesso!");
    }
  };
  return (
    <>
      <Menu />
      <h1>Perfil</h1>
      {msg && <p>{msg}</p>}
      <Formulario
        onEnviar={onEnviar}
        valores={{ email: usuario.email, senha: null }}
      />
    </>
  );
}

export default Perfil;
