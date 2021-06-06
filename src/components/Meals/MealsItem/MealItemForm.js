import {useRef} from "react";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const inputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const amount = inputRef.current.value;
        props.updateCount(amount);
    }

    return (
    <form onSubmit={submitHandler}>
        <span className={classes['summary-name']}>Amount</span>
        <input ref={inputRef} type="number" min="1" max="5" step="1" defaultValue="1"/>
        <button className={classes['form-button']}>Add Item</button>
    </form>
    )
}

export default MealItemForm;