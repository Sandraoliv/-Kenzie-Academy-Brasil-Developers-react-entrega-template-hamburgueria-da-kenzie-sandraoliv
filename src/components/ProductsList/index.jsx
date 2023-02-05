import { Product } from "../Products";
import { StyledProductsList } from "./style.js";

//  ul
export function ProductsList({ productsList, addProductToCart }) {
  return (
    <StyledProductsList>
      {productsList.map((product, index) => (
        <Product
          product={product}
          key={index}
          addProductToCart={addProductToCart}
        />
      ))}
    </StyledProductsList>
  );
}
