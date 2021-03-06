import { useContext } from "react";

import CartContext from "../../../store/use-context";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `₹${props.price.toFixed(2)}`;

  const addToCart = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  };

  return (
    <li className={classes["list-item"]}>
      <div className={classes["list-item-about"]}>
        <li className={classes["list-item-name"]}>{props.name}</li>
        <li className={classes["list-item-description"]}>
          <em>{props.description}</em>
        </li>
        <li className={classes["list-item-price"]}>{price}</li>
      </div>
      <div className={classes.summary}>
        <MealItemForm updateCount={addToCart} />
      </div>
    </li>
  );
};

export default MealItem;
