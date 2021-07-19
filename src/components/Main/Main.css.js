import styled from "styled-components";

export const MainPage = styled.ul`
  background-color: white;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-height: 65vh;
  padding: 50px 160px 0 160px;

  @media (orientation: landscape) and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    padding: 0 0 30px 0;
  }

  @media (orientation: portrait) and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    padding: 0 0 30px 0;
  }

  a {
    text-decoration: none;
  }
`;
