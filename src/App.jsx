import { useState } from "react";
import { useEffect } from "react";
import logo from "../src/assets/logo.svg";
import { Cart } from "./components/Cart";
import { ProductsList } from "./components/ProductsList";
import { api } from "./services/api";
import { Form } from "./components/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState("");
  const localStaregeCurrentSale = localStorage.getItem("@currentSale");
  const [currentSale, setCurrentSale] = useState(
    localStaregeCurrentSale ? JSON.parse(localStaregeCurrentSale) : []
  );
  const [cartTotal, setCartTotal] = useState(0);

  // onMount requisição à API/carregando informações/
  // productList é o state que guarda a resposta da API
  // e é com ele que consigo dar reatividade ao componente
  // ul ProductsList alterando os itens da lista li
  useEffect(() => {
    async function loadProductsApi() {
      try {
        setLoading(true);
        const response = await api.get("products");

        setProductsList(response.data);
      } catch (error) {
        console.log(error);
        toast.error("Algo deu errado!");
      } finally {
        setLoading(false);
      }
    }
    loadProductsApi();
  }, []);

  //  onUpDate adição  ao carrinho

  function addProductToCart(productsList, id) {
    toast.success("Produto adicionado!");
    return setCurrentSale([...currentSale, productsList]);
  }

  // persistindo dados
  useEffect(() => {
    localStorage.setItem("@currentSale", JSON.stringify(currentSale));
  }, [currentSale]);

  // removendo do carrinho
  function removeProductFromCart(id) {
    const newCurrentSale = currentSale.filter(
      (productsList) => productsList.id !== id
    );
    setCurrentSale(newCurrentSale);
    toast.error("Poduto removido!");
  }

  const filteredList = productsList.filter((product) => {
    return filteredProducts === ""
      ? true
      : product.name.toLowerCase().includes(filteredProducts.toLowerCase());
  });

  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo" />
        <Form setFilteredProducts={setFilteredProducts} />
      </header>
      {loading ? (
        <p className="load">Aguarde...</p>
      ) : (
        <main>
          <section>
            {filteredProducts && filteredProducts}
            <ProductsList
              productsList={productsList}
              addProductToCart={addProductToCart}
            />
          </section>
          <Cart
            currentSale={currentSale}
            productsList={productsList}
            removeProductFromCart={removeProductFromCart}
          />
        </main>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
