import { useParams } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import FormPerfil from "./FormPerfil";
import Menu from "../components/Menu";
import Secao from "../components/Secao";

function Perfil() {
  const { id } = useParams();

  return (
    <>
      <Cabecalho />
      <Conteudo>
        <Menu />
        <Secao texto="Perfil do Usuário">
          {id == 1 ? <FormPerfil /> : <p>Usuário Não Encontrado!</p>}
        </Secao>
      </Conteudo>
    </>
  );
}

export default Perfil;
