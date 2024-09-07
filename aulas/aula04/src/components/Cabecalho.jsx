import Titulo from "./Titulo";
import Logo from "./Logo";
import InputPesquisar from "./InputPesquisar";

function Cabecalho() {
  return (
    <header>
      <Logo imagem="" texto="Logo da Aplicação" />
      <Titulo texto="Aluno Online" />
      <InputPesquisar />
      <Logo imagem="" texto="Icone Pesquisar" />
    </header>
  );
}

export default Cabecalho;
