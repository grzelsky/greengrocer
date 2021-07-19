import React, { useEffect } from "react";
import { BrowserRouter as Route } from "react-router-dom";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { Header, Page } from "components";
import {
  fetchProductsCategories,
  fetchProducts,
} from "data/actions/productsCategoriesAndProducts.action";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function App() {
  const productsCategories = useSelector(
    (state) => state.productsCategoriesAndProducts.productsCategories
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
