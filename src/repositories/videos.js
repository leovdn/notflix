import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(videoObj) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObj),
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
  create,
};
