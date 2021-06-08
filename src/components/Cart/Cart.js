import { useContext, useState } from "react";

import CartContext from "../../store/use-context";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const [canOrder, setCanOrder] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalPrice = `₹${cartCtx.totalAmount.toFixed(2)}`;
  const addToCart = () => {};
  const removeFromCart = () => {};

  const itemsList = cartCtx.items;
  if (itemsList.length > 0) {
    setCanOrder(true);
  }
  const cartItems = itemsList.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onAdd={() => addToCart(item)}
      onDelete={() => removeFromCart(item.id)}
    />
  ));

  return (
    <Modal closeCart={props.closeCart}>
      {cartItems}
      <div>
        <span>Total Amount: </span>
        <span>{totalPrice}</span>
      </div>
      <button className={classes.btn} onClick={props.closeCart}>
        Close
      </button>
      {canOrder && <button className={classes.btn}>Order</button>}
    </Modal>
  );
};

export default Cart;
