import styled from 'styled-components';

const Table = styled.table`
  border-radius: 14px;
  overflow: hidden;
  border-radius: 4px;
  border-collapse: collapse;
  text-align: left;
  width: 100%;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  margin: 48px 0;

& thead th {
  padding: 16px 10px;
  font-size: 1.3em;
  color: #aaa;
  font-weight: 600;
  text-align: center;
  border-right: 1px solid #141414;

}

& thead th:first-child {
  text-align: left;
}

& tbody tr td {
  display: table-cell;
  font-weight: 400;
  padding: 10px;
  text-align: center;
  position: relative;
  border-right: 1px solid #141414;
}

& tbody tr td:first-child {
  text-align: left;
}

& tbody tr {
  border: none;
  display: table-row;
  transition: ease-in-out 100ms;
}

& tbody tr:hover, & tbody tr:focus  {
  opacity: 0.85;
}

& tbody tr:nth-child(odd) {
  background: #53585d;
}

& tbody tr:nth-child(even) {
  background: #393d41;
}

& tbody tr td button {
  display: inline-block;
  padding: 10px 15px;
  position: initial;
  transform: translate(0);
  width: auto;
}


& tbody tr td button {
  background: #dc1a28;
  border: none;
  border-radius: 2px;
  box-shadow: 0 4px 8px rgba(34, 34, 34, 0.2);
  color: #fff;
  font-weight: 700;;
  padding: 10px 0;
  width: 100%;
  max-width: 100px;
  transition: 300ms;
}

& thead {
  display: table-header-group;
  font-weight: 500;
}


& tbody tr td:before {
  display: none;
}

& tbody tr td button:hover, & tbody tr td button:focus {
  background: #90111a;
cursor: pointer;
}

& [data-title="Nome"] {
  width: 200px;
  font-weight: bold;
  font-size: 16px;
}

& [data-title="Descrição"] {
  font-size: 14px;  
  color: #d5d5d5;  
}

& [data-title="Button"] {
  width: 200px;
}

@media all and (max-width: 800px) {
  & tbody tr td {
      display: block;
      text-align: center;
  }

  & tbody tr td:first-child {
    text-align: center;
  }

  & tbody tr td:nth-child(even) {
    background-color: #53585d;
  }

  & tbody tr td:nth-child(odd) {
    background-color: #393d41;
  }

  & tbody tr td:before {
      content: attr(data-title);
      position: absolute;
      left: 15px;
      display: block;
      font-weight: 600;
      font-size: 1em;
  }

  & {
      border: none;
  }

  & thead {
      display: none;
  }

  & tbody tr {
      margin-bottom: 10px;
      display: block;
      border: 1px solid #dad6eb;
  }
  & [data-title="Nome"] {
  width: 100%;
  }
  & [data-title="Descrição"] {
  min-height: 38px;
  }
  & [data-title="Button"] {
    width: 100%;
  } 
  & [data-title="Button"]:before {
      content: attr(data-title);
      display: none;
  }
}
`;

export default Table;
