import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function Login() {
  const { login, msg } = useContext(AuthContext);

  return (
    <>
      <h1>Login</h1>
      {msg && <p>{msg}</p>}
      <button
        onClick={(e) => {
          login({ email: "cris@email.br", senha: "123456" });
        }}
      >
        Entrar
      </button>
      <Link to="/registrar">Registrar</Link>
    </>
  );
}

export default Login;
