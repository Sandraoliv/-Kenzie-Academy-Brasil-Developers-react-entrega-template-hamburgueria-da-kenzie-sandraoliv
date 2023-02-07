import { useState } from "react";
import { StyledCartTotal } from "./style.js";

export function CartTotal({ currentSale, removeAll }) {
  const total = currentSale.reduce(
    (previosValue, currentValue) => previosValue + currentValue.price,
    0
  );

  return (
    <StyledCartTotal>
      <div>
        <h4>Total</h4>
        <span>R${total},00</span>
      </div>
      <button className="cartButton" onClick={() => removeAll()}>
        Remover todos
      </button>
    </StyledCartTotal>
  );
}
