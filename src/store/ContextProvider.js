import React, { useReducer } from "react";

import CartContext from "./use-context";

const defaultState = { items: [], totalAmount: 0 };
const cartReducer = (state, action) => {
  if(action.type === "ADD"){
    const newTotalAmount = state.items.reduce((current,total) => {return current.amount + total})
    const newItems = state.items.concat(action.item)
    return { 
      items:newItems,
      totalAmount:newTotalAmount
    }
  }
  return { items: state.items, total: state.totalAmount };
};

const ContextProvider = (props) => {
  const [cartState, cartAction] = useReducer(cartReducer, defaultState);

  const addToCart = (item) => {
      cartAction({type:"ADD", item:item})
  };
  const removeFromCart = (id) => {
      cartAction({type:"DELETE", id:id})
  };

  cartState = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCart,
    rempveItem: removeFromCart,
  };

  return (
    <CartContext.Provider value={cartState}>
      {props.children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
