import { Fragment } from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <Fragment>
      <h2>{props.item.name}</h2>
      <p>{props.item.price}</p>
      <p>{props.item.amount}</p>
    </Fragment>
  );
};

export default CartItem;
