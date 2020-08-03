import React from 'react';
import styled, { css } from 'styled-components';
import Menu from '../Menu';
import Footer from '../Footer';

const Main = styled.main`
  background-color: #141414;
  color: var(--white);
  flex: 1;
  padding-top: 64px;
  padding-right: 5%;
  padding-left: 5%;
  ${({ paddingAll }) => css`
    padding: ${paddingAll};
  `}
  & h1 {
    margin: 48px auto;
    text-align: center;
  }
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Menu />
        <Main paddingAll={paddingAll}>
          {children}
        </Main>
      <Footer />
    </>
  );
}

export default PageDefault;