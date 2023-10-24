import React from "react";
import Image from "next/image";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { useCart } from "./CartContext";
import "./css/cartButton.css";

export default function Cart() {
  const { cart, dispatch } = useCart();
  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", product });
  };
  function calculateUnits (){
    const units = cart.reduce((total, product) => total + product.quantity, 0);
    if (units > 9){
      return "+9"
    }
    return units
  }
  const totalUnits = calculateUnits();
   
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret color="success">
      <div className="cart-notification-container">
    <div className="cart-notification">
      {totalUnits}
    </div>
  </div>
        Carro
      </DropdownToggle>
      <DropdownMenu light="true" className="custom-dropdown-menu">
        <DropdownItem header>Productos</DropdownItem>
        {cart.map((product) => (
          <section key={product.name}>
            <DropdownItem className="item" text>
              <p>{product.name}</p>
              <p>{product.quantity}</p>
              <button
                className="remove-button"
                onClick={() => removeFromCart(product)}
              >
                <Image src="/trash.svg" alt="Eliminar" width={15} height={15} />
              </button>
            </DropdownItem>
            <DropdownItem divider />
          </section>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}
