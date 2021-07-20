import styled from "styled-components";

export const GoToProductFromMain = styled.div`
  overflow: hidden;
  height: 275px;
  width: 360px;
  color: black;
  text-transform: uppercase;
  font-size: 1.4rem;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 1024px) {
    height: 200px;
    width: 200px;
    font-size: 1.2rem;
  }
  @media (max-width: 400px) {
    height: 150px;
    width: 200px;
    font-size: 1rem;
  }
  p {
    position: relative;
    line-height: 40px;
    top: 40px;
    color: white;
    background-color: rgba(0, 0, 0, 0.555);
  }
  img {
    height: 130%;
    z-index: -1;
  }
`;
