import { Fragment } from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <Fragment>
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      <p>{props.amount}</p>
      <button onClick={props.onAdd}>+</button>
      <button onClick={props.onDelete}>-</button>
    </Fragment>
  );
};

export default CartItem;
