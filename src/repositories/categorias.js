import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (ServerResponse) => {
      if (ServerResponse.ok) {
        const response = await ServerResponse.json();
        return response;
      }

      throw new Error('Não foi possível receber os dados');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (ServerResponse) => {
      if (ServerResponse.ok) {
        const response = await ServerResponse.json();
        return response;
      }

      throw new Error('Não foi possível receber os dados');
    });
}

function createCategory(values) {
  return fetch(URL_CATEGORIES, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(values),
  })
    .then(async (ServerResponse) => {
      if (ServerResponse.ok) {
        const response = await ServerResponse.json();
        return response;
      }

      throw new Error('Não foi possível Cadastrar os dados');
    });
}

export default {
  getAllWithVideos,
  getAll,
  createCategory,
};
