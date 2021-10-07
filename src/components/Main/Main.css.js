import styled from "styled-components";

export const MainPage = styled.ul`
  background-color: white;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  min-height: 65vh;
  padding: 0px 100px 0 100px;

  @media (max-width: 800px) and (orientation: portrait) {
    flex-direction: column;
  }
  @media (max-width: 800px) {
    padding: 2%;
    height: 65vh;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    min-height: 75vh;
  }

  a {
    text-decoration: none;
  }
`;
