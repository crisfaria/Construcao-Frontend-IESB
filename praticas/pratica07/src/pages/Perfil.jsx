import { useParams } from "react-router-dom";
import Secao from "../compnents/Secao";
import InputEmail from "../compnents/InputEmail";
import InputSenha from "../compnents/InputSenha";
import Botao from "../compnents/Botao";

function Perfil() {
  const { id } = useParams();
  return (
    <>
      {id == 1 ? (
        <Secao texto="Perfil do Usuário">
          <InputEmail valor="aluno@email.com" mudaValor={() => {}} />
          <InputSenha valor="" mudaValor={() => {}} />
          <Botao texto="Salvar" />
        </Secao>
      ) : (
        <p>Usuário não encontrado</p>
      )}
    </>
  );
}

export default Perfil;
