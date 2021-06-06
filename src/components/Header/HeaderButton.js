import classes from "./HeaderButton.module.css";

const HeaderButton = (props) => {
    const count=2;
    return (
        <button onClick={props.showCart} className={classes.button}>
            <span className={classes.name}>Your Orders</span>
            <span className={classes.count}>{count}</span>
        </button>
    )
}

export default HeaderButton;

