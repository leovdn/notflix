import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 8px 0;
  line-height: 1;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }

  &::after {
    transition: all ease-in-out .3s;
    background: ${({ backgroundColor }) => backgroundColor };
    content: "";
    display: block;
    height: 4px;
    width: 0;
    margin-top: 12px;
  }
  &:hover:after {
    width: 104%;
  }  
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  opacity: .4;
  &:hover,
  &:focus {
    opacity: .7;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;
