import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

const cadastroCategoria = () => (
<PageDefault>
  <h1>Cadastro de Categoria</h1>

  <form>
    <label>
      Nome da Categoria: 
      <input type="text" />
    </label>

    <button>
      Cadastrar
    </button>
  </form>

  <Link to="/">
    <h3>Ir para a Home</h3> 
  </Link> 
</PageDefault>);

export default cadastroCategoria;