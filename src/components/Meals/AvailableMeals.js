import MealsItem from "./MealsItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: 1,
    name: "Dragon Chicken",
    description: "Indo-Chinese chicken dish",
    price: 289.99,
  },
  {
    id: 2,
    name: "Kanthaari Meen",
    description: "A must try for spice lovers!",
    price: 325,
  },
  {
    id: 3,
    name: "Ghee Masla Dosa",
    description: "A South Indian fermented crepe",
    price: 77,
  },
];

const AvailableMeals = () => {
  const itemList = (
    <ul className={classes.container}>
      {DUMMY_MEALS.map((item) => {
        return (
          <MealsItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        );
      })}
    </ul>
  );

  return <div>{itemList}</div>;
};
export default AvailableMeals;
