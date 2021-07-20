import styled from "styled-components";

export const Wrapper = styled.aside`
  font-family: Arial;
  background-color: rgba(120, 120, 120, 0.8);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 2s linear;
`;

export const Content = styled.div`
background-color: white;
background-size: cover;
position: absolute;
width: 640px;
height: 427px;
box-shadow 0 5px 10px 2px darkgray;
padding: 20px;
color: lightgray;
h1{
  text-transform: uppercase;
  position: absolute;
  top:15%;
}
p{
  text-align: left;
  position: absolute;
  top:35%;
  width: 40%;
  font-size: 20px;
  line-height: 1.6rem
}
@media (max-width: 800px) {
    width: 340px;
    height: 220px;
    h1{
     font-size: 18px;
    }
    p{
      font-size: 14px;
    }
  }
`;

export const CloseIcon = styled.div`
  position: absolute;
  right: 7px;
  top: 5px;
  cursor: pointer;
  font-size: 2rem;
`;
