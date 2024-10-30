import axios from "axios";

const url = import.meta.env.VITE_URL_API;

function carregarContatos() {
  return axios
    .get(url)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, mensagem: error.message };
    });
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
    .put(`${url}/${contato.id}`, {
      nome: contato.nome,
      telefone: contato.telefone,
    })
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, mensagem: error.message };
    });
}

function removerContato(id) {
  return axios
    .delete(`${url}/${id}`)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, mensagem: error.meassage };
    });
}

function obterContato(id) {
  return axios
    .get(`${url}/${id}`)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    })
    .catch((error) => {
      return { sucesso: false, mensagem: error.meassage };
    });
}

export {
  carregarContatos,
  criarContato,
  removerContato,
  obterContato,
  atualizarContato,
};
