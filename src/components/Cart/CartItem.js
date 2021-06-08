import { Fragment } from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `₹ ${props.price.toFixed(2)}`;
  
  return (
    <Fragment>
      <div className={classes['cart-body']}>
        <div className={classes['cart-item__summary']}>
          <h2 className={classes["cart-item__name"]}>{props.name}</h2>
          <span className={classes["cart-item__price"]}>{price}</span>
          <span className={classes["cart-item__qty"]}>x {props.amount}</span>
        </div>
        <div className={classes["cart-item__action"]}>
          <button className={classes['btn__add']} onClick={props.onAdd}>+</button>
          <button className={classes['btn__remove']} onClick={props.onDelete}>-</button>
        </div>
      </div>
    </Fragment>
  );
};

export default CartItem;
