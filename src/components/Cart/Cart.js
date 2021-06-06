import { useContext } from "react";

import CartContext from "../../store/use-context"
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const items = ctx.items;
  return (
    <Modal closeCart={props.closeCart}>
      {/* <h2>Dosa</h2>
      <p>count:2</p> */}
      { items.map(item => <CartItem item={item}/>)} 
      <button className={classes.btn} onClick={props.closeCart}>Close</button>
    </Modal>
  );
};

export default Cart;
