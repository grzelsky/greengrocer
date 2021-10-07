import styled from "styled-components";

export const GoToProductFromMain = styled.div`
  position: relative;
  height: 235px;
  width: 360px;
  color: black;
  background-color: white;
  background-size: 130%;
  background-position: center;
  text-transform: uppercase;
  font-size: 2.5rem;
  transition: 0.5s;

  @media (max-width: 1024px) {
    height: 200px;
    width: 250px;
    font-size: 1.2rem;
  }

  @media (max-width: 800px) {
    height: 165px;
    width: 200px;
    font-size: 1.2rem;
  }
  @media (max-width: 800px) and (orientation: portrait) {
    height: 180px;
    width: 400px;
    font-size: 2rem;
  }
  @media (max-width: 400px) {
    height: 150px;
    width: 210px;
    font-size: 1rem;
  }

  p {
    line-height: 235px;
    height: 100%;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
    color: white;
    transition: 0.5s;
    background-color: rgba(0, 0, 0, 0.1);
    &:hover {
      background-color: rgba(0, 0, 0, 0.4);
    }
    @media (max-width: 1024px) {
      line-height: 160px;
    }
    @media (max-width: 400px) {
      line-height: 130px;
    }
  }
`;
