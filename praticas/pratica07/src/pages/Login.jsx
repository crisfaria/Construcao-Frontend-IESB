import Conteudo from "../compnents/Conteudo";
import Rodape from "../compnents/Rodape";
import FormLogin from "./FormLogin";

function Login() {
  return (
    <>
      <Conteudo>
        <img
          src="https://www.svgrepo.com/show/411955/learn.svg"
          alt="Logo da Aplicação"
        />
        <h1>Aluno Online</h1>
        <FormLogin />
      </Conteudo>
      <Rodape />
    </>
  );
}

export default Login;
