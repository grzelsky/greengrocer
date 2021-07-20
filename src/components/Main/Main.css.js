import styled from "styled-components";

export const MainPage = styled.ul`
  background-color: white;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-height: 65vh;
  padding: 50px 160px 0 160px;

  @media (max-width: 800px) {
    padding: 0px 2% 2% 2%;
    height: 65vh;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }

  a {
    text-decoration: none;
  }
`;
