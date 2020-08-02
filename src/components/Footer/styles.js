import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: #101010;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  color: #808080;
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 20px;
    padding-bottom: 32px;
  }

  & .social img {
    width: 36px;
    height: 36px;
    margin: 0px 12px;
    transition: 100ms;
  }

  & .social img:hover {
    opacity: 0.6;
`;
