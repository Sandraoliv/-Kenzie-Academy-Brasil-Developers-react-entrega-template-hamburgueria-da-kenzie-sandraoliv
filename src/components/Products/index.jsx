import { StyledProduct } from "./style.js";
// li
export function Product({ product, addProductToCart }) {
  return (
    <StyledProduct>
      <div className="imgContainer">
        <img src={product.img} alt="" />
      </div>
      <div>
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <span> R$ {product.price} ,00</span>
        <button onClick={() => addProductToCart(product)}>Adicionar</button>
      </div>
    </StyledProduct>
  );
}
