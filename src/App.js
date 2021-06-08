import { Fragment, useState } from "react";

import CartProvider from "./store/CartProvider";
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
    <CartProvider>
      {cartIsShown && <Cart closeCart={handleCloseCart}/>}
      <Header showCart={handleOpenCart}/>
      <main><Meals /></main>
    </CartProvider>
  );
};

export default App;
