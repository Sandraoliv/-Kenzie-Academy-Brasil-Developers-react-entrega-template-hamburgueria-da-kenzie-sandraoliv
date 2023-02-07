import { CartTotal } from "../CartTotal/";
import { StyledCart } from "./style";

export function Cart({
  removeAll,
  currentSale,
  productId,
  removeProductFromCart,
  setCartTotal,
  setCurrentSale,
}) {
  return (
    <StyledCart>
      <div>
        <div className="header">
          <h3>Carrinho de compras</h3>
        </div>
        <ul>
          {currentSale.map((productsList) => (
            <li key={productsList.id}>
              <div className="imageContainer">
                <img src={productsList.img} alt="" />
              </div>
              <div className="productInfo">
                <h4>{productsList.name}</h4>
                <span>{productsList.category}</span>
              </div>
              <button onClick={() => removeProductFromCart(productsList.id)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
      <CartTotal
        setCurrentSale={setCurrentSale}
        currentSale={currentSale}
        removeAll={removeAll}
        setCartTotal={setCartTotal}
      />
    </StyledCart>
  );
}
