import { useContext } from "react";

import CartContext from "../../store/use-context";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const canOrder = cartCtx.items.length > 0;

  const totalPrice = cartCtx.totalAmount;
  const addToCart = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const removeFromCart = (id) => {
    cartCtx.removeItem(id);
  };

  const itemsList = cartCtx.items;

  const cartItems = (
    <ul>
      {itemsList.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={() => addToCart(item)}
          onDelete={() => removeFromCart(item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal closeCart={props.closeCart}>
      {cartItems}
      <div className={classes.summary}>
        <span>Amount</span>
        <span className={classes.price}>{totalPrice}</span>
      </div>
      <div className={classes.action}>
        {canOrder && <button className={classes['btn__alt']}>Order</button>}
        <button className={classes.btn} onClick={props.closeCart}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default Cart;
