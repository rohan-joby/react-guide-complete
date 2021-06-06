import classes from "./HeaderButton.module.css";

const HeaderButton = (props) => {
    return (
        <button onClick={props.showCart} className={classes.button}>
            <span className={classes.name}>Your Orders</span>
            <span className={classes.count}>2</span>
        </button>
    )
}

export default HeaderButton;

