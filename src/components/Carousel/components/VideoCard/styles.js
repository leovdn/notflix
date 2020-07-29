import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  width: 320px;
  height: 180px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  transform: scale(0.94);
  transform-origin: left;
  transition: ease .3s;
  &:hover,
  &:focus {
    transform: scale(1);
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
