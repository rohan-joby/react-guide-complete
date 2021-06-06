import { Fragment } from "react";

import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  return (
    <Modal closeCart={props.closeCart}>
      <h2>Dosa</h2>
      <p>count:2</p>
      <button onClick={props.closeCart}>Close</button>
    </Modal>
  );
};

export default Cart;
