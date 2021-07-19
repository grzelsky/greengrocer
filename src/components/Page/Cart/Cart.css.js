import styled from "styled-components";

export const ProductsInCart = styled.div`
  display: flex;
  height: 65vh;
  justify-content: center;
  flex-wrap: wrap;
  padding: 1vh 0 1vh 0;
`;

export const ProductsListInCart = styled.ul`
display:flex;
justify-content: center;
background-color: orange;
min-width: 600px;
@media(orientation: landscape) and (max-width: 600px){
    min-width: 330px;
}
@media(orientation: portrait) and (max-width: 600px){
  min-width: 330px;
}
  li{
  list-style: none;
   
`;

export const SinglePosition = styled.p`
  display: flex;
  justify-content: space-between;
  right: 2px;
  background-color: white;
  text-transform: uppercase;
  min-width: 550px;
  text-align: left;
  margin: 5px 0 5px 0;
  padding: 0 5px 0 5px;
  line-height: 30px;
  font-size: 1rem;
  p {
    flex-basis: 30%;
  }
  @media (orientation: landscape) and (max-width: 600px) {
    font-size: 0.7rem;
    min-width: 300px;
  }
  @media (orientation: portrait) and (max-width: 600px) {
    font-size: 0.7rem;
    min-width: 300px;
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
`;
