import { useRef, useState } from "react";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsalid] = useState(true);

  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const amount = inputRef.current.value;
    const amountNumber = Number(amount);
    
    if (amount.trim().length === 0 || amountNumber < 1) {
      setAmountIsalid(false);
      return;
    }
    props.updateCount(amountNumber);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor={props.id} className={classes["summary-name"]}>
        Amount
      </label>
      <input
        ref={inputRef}
        id={props.id}
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      />
      <button className={classes["form-button"]}>Add Item</button>
      {!amountIsValid && <p>Give a valid amount!</p>}
    </form>
  );
};

export default MealItemForm;
