import axios from "axios";

function carregarContatos() {
  const dados = [];
  axios
    .get(import.meta.env.VITE_URL_API)
    .then((response) => dados.push(...response.data))
    .catch((error) => new Error("Deu ruim"));
  return dados;
}

function criarContato(contato) {
  axios
    .post(import.meta.env.VITE_URL_API, contato)
    .then((response) => (contato.id = response.id))
    .catch((error) => new Error("Deu ruim"));
  return contato;
}

function atualizarContato(contato) {
  axios
    .put(import.meta.env.VITE_URL_API, contato)
    .then((response) => (contato.id = response.id))
    .catch((error) => new Error("Deu ruim"));
  return contato;
}

function removerContato(contato) {
  axios
    .delete(import.meta.env.VITE_URL_API, contato)
    .then((response) => (contato.id = response.id))
    .catch((error) => new Error("Deu ruim"));
  return contato;
}

function obterContato(contato) {
  axios
    .get(import.meta.env.VITE_URL_API, contato)
    .then((response) => (contato.id = response.id))
    .catch((error) => new Error("Deu ruim"));
  return contato;
}

export { carregarContatos, criarContato };
