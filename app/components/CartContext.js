"use client";
import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingProduct = state.find(
        (product) => product.name === action.product.name
      );
      if (existingProduct) {
        return state.map((product) => {
          if (product.name === action.product.name) {
            return { ...product, quantity: product.quantity + 1 };
          }
          return product;
        });
      } else {
        return [...state, { ...action.product, quantity: 1 }];
      }
    case "REMOVE_FROM_CART":
      return state.filter((product) => product.name !== action.product.name);
    default:
      return state;
  }
}

export function useCart() {
  return useContext(CartContext);
}
