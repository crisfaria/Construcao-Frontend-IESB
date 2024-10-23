import axios from "axios";

const url = import.meta.env.VITE_URL_API;

function carregarContatos() {
  const dados = [];
  axios
    .get(url)
    .then((response) => dados.push(...response.data))
    .catch((error) => new Error("Deu ruim"));
  return dados;
}

function criarContato(contato) {
  return axios
    .post(url, contato)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, mensagem: error.message };
    });

  //try {
  // const response = await axios.post (url, contato)
  //return { sucesso: true, dados: response.data}
  //} catch (error) {
  //return { sucesso: false, mensagem: error.message }
  //}
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
