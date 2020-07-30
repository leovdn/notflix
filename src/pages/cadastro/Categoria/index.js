import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormFields';

function CadastroCategoria() { 
  const initialValues = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({ ...values, [key]: value,})
  }

  function handleChange(eventInfo) {
    setValue(
      eventInfo.target.getAttribute('name'), 
      eventInfo.target.value);
  }
    
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={function handleSubmit(eventInfo) {
        eventInfo.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);

        setValues(initialValues);
      }}>
        
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
       
        <FormField
          label="Descrição"
          type="text"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        {/* <div>
          <label>
            Descrição:
            <textarea 
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        {/* <div>
          <label>
            Cor:
            <input 
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, index) => {
          return (
            <li key={`${categoria}${index}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>
      <Link to="/">
        <h3>Ir para a Home</h3> 
      </Link> 
  </PageDefault>
  )};

export default CadastroCategoria;