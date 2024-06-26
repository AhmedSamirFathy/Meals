import React from "react";
import ReactDom from "react-dom";
import classes from './Modal.module.css';

function Backdrop(props) {
  return (
    <div className={classes.backdrop} onClick={props.onClose} />
  );
};

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

function Modal(props) {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop onClose={props.onHideCart} />, portalElement)}
      {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </React.Fragment>
  );
};

export default Modal;