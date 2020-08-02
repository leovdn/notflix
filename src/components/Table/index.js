import styled from 'styled-components';

const Table = styled.table`
  border: 1px solid #ede;
  border-radius: 14px;
  border-collapse: collapse;
  text-align: left;
  width: 100%;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  margin-top: 48px;

& thead th {
  padding: 10px;
  font-size: 1.3em;
  color: #fff;
  font-weight: 600;
  text-align: center;
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
}

& tbody tr td:first-child {
  text-align: left;
}

& tbody tr {
  border: none;
  display: table-row;
}

& tbody tr:nth-child(odd) {
  background: #53585d;
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
  width: 50%;
}

& thead {
  display: table-header-group;
  font-weight: 500;
}


& tbody tr td:before {
  display: none;
}

& tbody tr td button:hover, & tbody tr td button:focus {
  background: #a795fe;
cursor: pointer;
}

@media all and (max-width: 800px) {
  & tbody tr td {
      display: block;
      text-align: center;
  }
  & tbody tr td:first-child {
    text-align: center;
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
}
`;

export default Table;