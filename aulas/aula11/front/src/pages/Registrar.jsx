import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Registrar() {
  const navigate = useNavigate();
  const { registrar } = useContext(AuthContext);
  return (
    <>
      <h1>Registar</h1>
      <button
        onClick={() => {
          registrar({ email: "cris@email.br", senha: "123456" });
          navigate("/");
        }}
      >
        Enviar
      </button>
    </>
  );
}

export default Registrar;
