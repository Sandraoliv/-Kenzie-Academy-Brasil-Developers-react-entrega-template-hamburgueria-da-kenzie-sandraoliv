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

  function addProductToCart(productsList) {
    if (
      !currentSale.some(
        (newProductsList) => newProductsList.name === productsList.name
      )
    ) {
      setCurrentSale([...currentSale, productsList]);
      toast.success("Produto adicionado!");
    } else {
      toast.error("Produto já adicionado!");
    }
  }

  useEffect(() => {
    localStorage.setItem("@currentSale", JSON.stringify(currentSale));
  }, [currentSale]);

  function removeProductFromCart(productId) {
    const newCurrentSale = currentSale.filter((sale) => sale.id !== productId);

    setCurrentSale(newCurrentSale);
    toast.error("Produto removido!");
  }
  function removeAll() {
    setCurrentSale([]);
    toast.success("Todos os itens removidos!");
  }

  const selectedProduct = productsList.filter((product) =>
    filteredProducts === ""
      ? true
      : product.name.toLowerCase().includes(filteredProducts.toLowerCase())
  );

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
            <ProductsList
              selectedProduct={selectedProduct}
              addProductToCart={addProductToCart}
            />
          </section>
          <Cart
            setCartTotal={setCartTotal}
            currentSale={currentSale}
            productsList={productsList}
            removeProductFromCart={removeProductFromCart}
            removeAll={removeAll}
            setCurrentSale={setCurrentSale}
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
