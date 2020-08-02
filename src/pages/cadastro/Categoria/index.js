import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormFields';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';
import Table from '../../../components/Table';
import './Loading.css';

function CadastroCategoria() {
  const initialValues = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const URL = window.location.hostname.includes('localhost')
    ? 'http://localhost:8080/categorias'
    : 'https://notflix-leovdn.herokuapp.com/categorias';

  const { handleChange, values, clearForm } = useForm(initialValues);
  const [categorias, setCategorias] = useState([]);
  const history = useHistory();

  async function handleNewcategoria(event) {
    event.preventDefault();

    categoriasRepository.createCategory(values);
    setCategorias([...categorias, values]);
    history.push('/');
    clearForm();
  }

  async function deleteCategory(event) {
    event.preventDefault();

    categoriasRepository.deleteCategory(values);
    setCategorias([...categorias, values]);
    clearForm();
  }

  useEffect(() => {
    fetch(URL)
      .then(async (ServerResponse) => {
        const response = await ServerResponse.json();
        setCategorias([
          ...response,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria
        {' '}
        {values.titulo}
      </h1>

      {categorias.length === 0 && (
        <div className="loader" />
      )}

      <form
        className="formCategoria"
        onSubmit={handleNewcategoria}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button className="Cadastrar">
          Cadastrar
        </Button>
      </form>

      <Table>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Descrição</th>
            <th>Remover</th>
          </tr>
        </thead>

        <tbody>
          {categorias.map((categoria) => (
            <tr key={`${categoria.titulo}`}>
              <td data-title="Nome">{categoria.titulo}</td>
              <td data-title="Descrição">{categoria.descricao}</td>
              <td data-title="Button">
                <button
                  type="button"
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Link to="/">
        <h3>Ir para a Home</h3>
      </Link>

    </PageDefault>
  );
}

export default CadastroCategoria;
