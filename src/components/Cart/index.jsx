import { CartTotal } from "../CartTotal/";
import { StyledCart } from "./style";

export function Cart({ currentSale, removeProductFromCart, id }) {
  return (
    <StyledCart>
      <div>
        <div className="header">
          <h3>Carrinho de compras</h3>
        </div>
        <ul>
          {currentSale.map((productsList, id) => (
            <li key={id}>
              <div className="imageContainer">
                <img src={productsList.img} alt="" />
              </div>
              <div className="productInfo">
                <h4>{productsList.name}</h4>
                <span>{productsList.category}</span>
              </div>
              <button onClick={() => removeProductFromCart(id)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
      <CartTotal currentSale={currentSale} />
    </StyledCart>
  );
}
