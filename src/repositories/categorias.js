import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos() {
  console.log(config.URL_BACKEND);

  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (ServerResponse) => {
      if (ServerResponse.ok) {
        const response = await ServerResponse.json();
        return response;
      }

      throw new Error('Não foi possível receber os dados');
    });
}

export default {
  getAllWithVideos,
};
