import {useContext} from "react";
import CartContext from "../../store/use-context";

import classes from "./HeaderButton.module.css";

const HeaderButton = (props) => {
    const cartCtx = useContext(CartContext);
    
    const count = cartCtx.items.reduce((count,item) => count + item.amount);

    return (
        <button onClick={props.showCart} className={classes.button}>
            <span>🛒</span>
            <span className={classes.name}>Your Orders</span>
            <span className={classes.count}>{count}</span>
        </button>
    )
}

export default HeaderButton;

