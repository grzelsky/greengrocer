import styled, { keyframes } from "styled-components";
const fade = keyframes`
  0% {
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  
  95% {
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;
export const Banner = styled.div`
  height: 25vh;
  background-position: 0 50%;
  border: 5px white solid;
  animation: 5s ${fade} linear infinite;

  h1 {
    position: relative;
    color: white;
    text-transform: uppercase;
    top: 40%;
    text-shadow: 0px 0px 25px rgba(0, 0, 0, 1);
    font-size: 2rem;
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 400px) {
    height: 15vh;
    h1 {
      font-size: 1.2rem;
    }
  }
`;
export const Menu = styled.div`
  display: flex;
  background-color: orange;
  height: 5vh;
  align-items: center;
  padding: 0 5% 0 5%;

  @media (max-width: 800px) {
    height: 10vh;
    padding: 0 2% 0 2%;
  }
`;

export const Navigation = styled.ul`
  list-style: none;
  display: flex;
  flex: 3.5;
  justify-content: space-around;
  text-transform: uppercase;
  font-size: 1.3rem;

  li {
    transition: 0.3s;
    a {
      color: white;
      text-decoration: none;
      transition: 0.5s;
      &:hover {
        color: #18ab5d;
      }
    }
  }

  @media (max-width: 800px) {
    font-size: 1rem;
  }
  @media (max-width: 400px) {
    font-weight: bold;
    font-size: 0.75rem;
  }
`;

export const CartLink = styled.ul`

display: flex;
flex: 1;
text-transform: uppercase;
font-size: 1.3rem;
width: 55px;
justify-content: center;
a{
  display: flex;
  color: white;
  text-decoration: none;
  }
}
span{
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: white;
  color: orange;
  font-size: 0.8rem;
  font-weight: bold; 
}
@media (max-width: 800px) {
  font-size: 1rem;
}
@media (max-width: 400px) {
  font-size: 0.75rem;
}
`;
