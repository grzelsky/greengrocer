import React from "react";
import { createPortal } from "react-dom";
import { Wrapper, Content, CloseIcon } from "./Modal.css";
import strawberries from "images/truskawki.jpg";

const Modal = ({ close }) => {
  return createPortal(
    <Wrapper onClick={close}>
      <Content
        style={{ backgroundImage: `url(${strawberries})` }}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseIcon onClick={close}>&times;</CloseIcon>
        <h1>welcome to our greengrocer!</h1>
        <p>You will always find fresh and healthy goods here.</p>
      </Content>
    </Wrapper>,
    document.querySelector("#modal")
  );
};

export default Modal;
