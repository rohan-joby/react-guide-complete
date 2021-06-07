import { useContext } from "react";

import CartContext from "../../store/use-context";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const addToCart = () => {

  }
  const removeFromCart = () => {
    
  }

  const itemsList = ctx.items;
  return (
    <Modal closeCart={props.closeCart}>
    
      {itemsList.map((item) => (
        <CartItem
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addToCart}
          onDelete={removeFromCart}
        />
      ))}
      <button className={classes.btn} onClick={props.closeCart}>
        Close
      </button>
    </Modal>
  );
};

export default Cart;
