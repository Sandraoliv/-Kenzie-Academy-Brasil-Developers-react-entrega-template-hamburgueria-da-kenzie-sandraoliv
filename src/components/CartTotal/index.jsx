import { useState } from "react";
import { StyledCartTotal } from "./style.js";

export function CartTotal({ currentSale }) {
  const total = currentSale.reduce(
    (previosValue, currentValue) => previosValue + currentValue.price,
    0
  );

  return (
    <StyledCartTotal>
      <div>
        <h4>Total</h4>
        <p>R${total},00</p>
      </div>
      <button className="cartButton">Remover todos</button>
    </StyledCartTotal>
  );
}
