import { Product } from "../Products";
import { StyledProductsList } from "./style.js";

//  ul
export function ProductsList({
  selectedProduct,

  addProductToCart,
}) {
  return (
    <StyledProductsList>
      {selectedProduct.map((product, index) => (
        <Product
          product={product}
          key={index}
          addProductToCart={addProductToCart}
        />
      ))}
    </StyledProductsList>
  );
}
