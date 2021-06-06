import { Fragment } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealsItem.module.css";

const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <Fragment>
      <div className={classes["list-item"]}>
        <div className={classes["list-item-about"]}>
          <li className={classes["list-item-name"]}>{props.name}</li>
          <li className={classes["list-item-description"]}>
            <em>{props.description}</em>
          </li>
        </div>
        <div className={classes.summary}>
          <MealItemForm />
          <li className={classes["list-item-price"]}>{price}</li>
        </div>
      </div>
    </Fragment>
  );
};

export default MealsItem;
