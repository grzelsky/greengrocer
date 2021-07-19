import styled from "styled-components";

export const Banner = styled.div`
  background-color: green;
  height: 25vh;
  background-position: 0 50%;
  border: 5px white solid;

  h1 {
    position: relative;
    color: white;
    text-transform: uppercase;
    top: 40%;
    text-shadow: 0px 0px 25px rgba(0, 0, 0, 1);
    font-size: 2rem;
  }
`;
export const Menu = styled.div`
  display: flex;
  background-color: orange;
  height: 5vh;
  align-items: center;
  padding: 0 5% 0 5%;

  @media (orientation: landscape) and (max-width: 700px) {
    height: 100px;
  }

  @media (orientation: portrait) and (max-width: 700px) {
    height: 100px;
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
    a {
      color: white;
      text-decoration: none;
    }
  }
  @media (orientation: landscape) and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 1rem;
  }
  @media (orientation: portrait) and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 1rem;
  }
`;

export const CartLink = styled.ul`

display: flex;
flex: 1;
text-transform: uppercase;
font-size: 1.3rem;
width: 55px;

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
`;
