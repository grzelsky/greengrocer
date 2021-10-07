import styled from "styled-components";

export const Product = styled.div`
  height: 275px;
  width: 275px;
  overflow: hidden;
  color: white;
  margin: 2px 2px;
  background-color: black;

  @media (max-width: 1024px) {
    height: 225px;
    width: 250px;
  }
`;

export const Image = styled.div`
  height: 75%;
  overflow: hidden;
  transition: 0.5s;
  &:hover {
    opacity: 0.65;
  }
  img {
    height: 220px;
    transition: 0.5s;
    &:hover {
      scale: 1.1;
    }
  }
`;

export const BuyInfoLabel = styled.div`
  display: flex;
  height: 25%;
  font-size: 1.2rem;
  justify-content: space-around;
  background-color: orange;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const PriceAndQuantity = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex-basis: 38%;
  justify-content: space-around;
  align-items: flex-start;
  // border: 1px white solid;
  padding: 1.5%;
`;

export const Buy = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 62%;
  align-items: flex-start;
  padding: 1.5%;
  button:nth-child(4) {
    position: relative;
    left: 25%;
  }
  p {
    width: 100%;
    text-align: left;
  }
`;
export const Button = styled.button`
  border: 2px ${(props) => (props.disabled ? "gray" : "white")} solid;
  background-color: ${(props) => (props.buy ? "#679FDB" : "orange")};
  width: ${(props) => (props.buy ? "50" : "25")}px;
  height: 25px;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => (props.disabled ? "gray" : "white")};
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    font-size: 0.9rem;
    margin-left: 2px;
  }
`;
