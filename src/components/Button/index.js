import styled from 'styled-components';

const Button = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  background: transparent;
  box-sizing: border-box;
  cursor: pointer;
  padding: 12px 16px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }

  &.categorias {
    margin: 0px auto 48px auto;
  }
`;

export default Button;
