import { Outlet } from "react-router-dom";
import Cabecalho from "../compnents/Cabecalho";
import Conteudo from "../compnents/Conteudo";
import Menu from "../compnents/Menu";

function Layout() {
  return (
    <>
      <Cabecalho />
      <Conteudo>
        <Menu />
        <Outlet />
      </Conteudo>
    </>
  );
}

export default Layout;
