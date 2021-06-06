import classes from "./MealItemForm.module.css";

const MealItemForm =() => {
    const submitHandler = (e) => {
        e.preventDefault();
    }

    return (
    <form onSubmit={submitHandler}>
        <span className={classes['summary-name']}>Amount</span>
        <input type="number" min="1" max="5" step="1" defaultValue="1"/>
        <button className={classes['form-button']}>Add Item</button>
    </form>
    )
}

export default MealItemForm;