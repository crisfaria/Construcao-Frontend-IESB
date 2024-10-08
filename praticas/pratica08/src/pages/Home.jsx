import { useEffect, useState } from "react";
import Conteudo from "../components/Conteudo";
import Menu from "../components/Menu";
import Secao from "../components/Secao";
import Painel from "../components/Painel";

function Home() {
  const [carregando, setCarregando] = useState(true);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const dadosCarregados = [
        [
          "Inscrições para Cursos de Extensão",
          "Evento Maratona de Programação",
          "Palestra sobre Inteligência Artificial",
        ],
        ["Semana de Provas P1", "Entrega de Trabalhos", "Apresentação de TCC"],
        [
          "Lógica de Programação - 5,5",
          "Banco de Dados - 7,8",
          "Engenharia de Software - 5,3",
        ],
        [
          "Lógica de Programação - 4",
          "Banco de Dados - 0",
          "Engenharia de Software - 1",
        ],
      ];
      setDados(dadosCarregados);
      setCarregando(false);

      return () => clearTimeout(timeout);
    }, 5000);
  }, []);

  return (
    <>
      <Conteudo>
        <Menu />
        <Secao texto="Página Inicial">
          {carregando ? (
            <p>Aguarde......</p>
          ) : (
            <div>
              <Painel texto="Mural de Avisos" itens={dados[0]} />
              <Painel texto="Agenda Acadêmica" itens={dados[1]} />
              <Painel texto="Histórico de Notas" itens={dados[2]} />
              <Painel texto="Histórico de Faltas" itens={dados[3]} />
            </div>
          )}
        </Secao>
      </Conteudo>
    </>
  );
}

export default Home;
