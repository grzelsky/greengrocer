import styled from "styled-components";

export const GoToProductFromMain = styled.div`
  overflow: hidden;
  height: 275px;
  max-width: 20vw;
  color: black;
  text-transform: uppercase;
  font-size: 1.4rem;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }
  @media (orientation: landscape) and (max-width: 700px) {
    max-width: 70vw;
  }
  @media (orientation: portrait) and (max-width: 600px) {
    max-width: 70vw;
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
