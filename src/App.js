import React, { useEffect } from "react";
import { BrowserRouter as Route } from "react-router-dom";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Header, Page } from "components";
import { fetchProductsCategories } from "data/actions/productsCategories.action";
import { fetchProducts } from "data/actions/products.action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function App() {
  const productsCategories = useSelector(
    (state) => state.productsCategoriesInShop.productsCategories
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="App">
      <Route>
        <Header productsCategories={productsCategories} />
        <Page />
      </Route>
    </div>
  );
}

export default App;
