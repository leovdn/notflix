import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

const cadastroVideo = () => (
  <PageDefault>
    <h1>Cadastro de Vídeos</h1>
    <Link to="/cadastro/categoria">
      <h3>Cadastro de Categorias</h3>
    </Link>
  </PageDefault>
);

export default cadastroVideo;
