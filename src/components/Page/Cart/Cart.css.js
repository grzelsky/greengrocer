import styled from "styled-components";

export const ProductsInCart = styled.div`
  display: flex;
  height: 65vh;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1vh 0 1vh 0;
`;

export const ProductsListInCart = styled.ul`
  display: flex;
  justify-content: center;
  background-color: orange;
  min-width: 600px;
  li {
    list-style: none;
  }
  @media (max-width: 1024px) {
    width: 95%;
  }
`;

export const SinglePosition = styled.p`
  display: flex;
  justify-content: space-between;
  background-color: white;
  text-transform: uppercase;
  width: 550px;
  text-align: left;
  margin: 5px 0 5px 0;
  padding: 0 5px 0 5px;
  line-height: 30px;
  font-size: 1rem;
  p {
    flex-basis: 30%;
  }

  button {
    text-align: center;
    border: none;
    background-color: white;
    color: orange;
    font-weight: bold;
    font-size: 1.2rem;
    &:hover {
      cursor: pointer;
    }
    width: 20px;
    height: 20px;
  }
  @media (max-width: 1024px) {
    width: 95vw;
    p {
      font-size: 0.65rem;
    }
  }
`;
