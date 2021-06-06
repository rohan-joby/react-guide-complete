import React from "react";

import CartContext from "./use-context";

const ContextProvider = (props) => {
  
  const addToCart = (item) => {}
  const removeFromCart = (id) => {}
  const cartState = {
    items:[],
    totalAmount:0,
    addItem: addToCart,
    rempveItem: removeFromCart
  }

  return (
    <CartContext.Provider value={cartState}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
