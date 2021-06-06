import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import MealsItems from "./MealsItems";
import MealsItem from "./MealsItem/MealItem";
import classes from "./Meals.module.css";

const Meals = () => {
  const itemList = (
    <ul className={classes.container}>
      {MealsItems.map((item) => {
        return (
          <MealsItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            amount={item.amount}
            price={item.price}
          />
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
