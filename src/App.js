import { Fragment, useState } from "react";

import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  
  const handleOpenCart = () => {
    setCartIsShown(prevValue => !prevValue);
  }

  const handleCloseCart = () => {
    setCartIsShown(prevValue => !prevValue);
  }

  return (
    <Fragment>
      <Header showCart={handleOpenCart}/>
      <Meals />
      {cartIsShown && <Cart closeCart={handleCloseCart}/>}
    </Fragment>
  );
};

export default App;
