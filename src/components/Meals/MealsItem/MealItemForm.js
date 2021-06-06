import classes from "./MealItemForm.module.css";

const MealItemForm =() => {
    return <form>
        <span className={classes['summary-name']}>Amount</span>
        <input type="number" min="1" max="5" step="1" defaultValue="1"/>
    </form>
}

export default MealItemForm;