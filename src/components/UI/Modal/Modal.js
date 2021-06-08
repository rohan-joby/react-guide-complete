import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const Backdrop = () => {
    return <div className={classes.backdrop} onClick={props.closeCart}></div>;
  };

  const Overlay = () => {
    return (
      <div className={classes.overlay}>
        {props.children}
      </div>
    );
  };

  const backdropLink = document.querySelector("#backdrop");
  const overlayLink = document.querySelector("#overlay");
  return (
    <Fragment>
        {ReactDOM.createPortal(<Backdrop closeCart={props.closeCart}></Backdrop>,backdropLink)}
        {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,overlayLink)}
    </Fragment>
  );
};

export default Modal;
