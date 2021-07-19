import styled from "styled-components";

export const Product = styled.div`
  height: 275px;
  width: 275px;
  overflow: hidden;
  color: white;
  margin: 2px 2px;
`;

export const Image = styled.div`
  height: 75%;
  overflow: hidden;
  img {
    height: 220px;
  }
`;

export const BuyInfoLabel = styled.div`
  display: flex;
  height: 25%;
  font-size: 1.2rem;
  justify-content: space-around;
  background-color: orange;
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
`;
