import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import MealsItems from "./MealsItems";
import classes from "./Meals.module.css";

const Meals = () => {

            
  const itemList = (
    <ul className={classes.container}>
      {MealsItems.map((item) => {
          const price = `$${item.price.toFixed(2)}`;
        return (
          <div className={classes["list-item"]}>
            <div className={classes["list-item-about"]}>
              <li className={classes["list-item-name"]}>{item.name}</li>
              <li className={classes["list-item-description"]}>
                <em>{item.description}</em>
              </li>
            </div>
            <li className={classes["list-item-price"]}>{price}</li>
          </div>
        );
      })}
    </ul>
  );

  return (
    <Fragment>
      <MealsSummary />
      {itemList}
    </Fragment>
  );
};

export default Meals;
