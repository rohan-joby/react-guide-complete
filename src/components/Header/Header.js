import { Fragment } from "react";
import HeaderButton from "./HeaderButton";

import classes from "./Header.module.css";

const Header = () => {
    return (
        <Fragment>
            <nav className={classes.navigation}>
                <h2 className="logo">MealsOrder</h2>
                <HeaderButton />
            </nav>
        </Fragment>
    )
}

export default Header;