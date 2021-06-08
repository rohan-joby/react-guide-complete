import React, { useReducer } from "react";

import CartContext from "./use-context";

const defaultState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const newTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];
    let newItem;
    let newItems;
    if (existingItem) {
      newItem = { ...existingItem, amount: existingItem.amount + action.item.amount };
      newItems = [...state.items];
      newItems[existingItemIndex] = newItem;

      return { items: newItems, totalAmount: newTotalAmount };
    }
    else{
        newItem={
          ...action.item
        }
        newItems = state.items.concat(newItem);
      }
      return { items: newItems, total: newTotalAmount };
    }

  if (action.type === "DELETE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];
    const newTotalAmount = state.totalAmount - existingItem.price;
    let newItem;
    let newItems;
    if (existingItem.amount === 1) {
      newItems = state.items.filter((item) => item.id !== action.id);
    } else {
      newItem = { ...existingItem, amount: existingItem.amount - 1 };
      newItems = [...state.items];
      newItems[existingItemIndex] = newItem;

      return { items: newItems, totalAmount: newTotalAmount };
    }
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, cartAction] = useReducer(cartReducer, defaultState);

  const addToCart = (item) => {
    cartAction({ type: "ADD", item: item });
  };
  const removeFromCart = (id) => {
    cartAction({ type: "DELETE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCart,
    removeItem: removeFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
