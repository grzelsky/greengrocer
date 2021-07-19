import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { MainPage } from "./Main.css";
import { GoToProducts, Modal } from "components";

const Main = () => {
  const productsCategories = useSelector(
    (state) => state.productsCategoriesAndProducts.productsCategories
  );

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShown(true);
    }, 3500);
  }, []);

  const closeModal = (e) => {
    // e.stopPropagation();
    setIsShown(false);
  };
  const showModal = isShown ? <Modal close={closeModal} /> : null;

  const goToProducts = productsCategories.map((productCategory) => (
    <li key={productCategory.id}>
      <NavLink to={productCategory.engName}>
        <GoToProducts
          name={productCategory.engName}
          image={productCategory.image}
        />
      </NavLink>
    </li>
  ));
  return (
    <Fragment>
      {showModal}
      <MainPage>{goToProducts}</MainPage>
    </Fragment>
  );
};

export default Main;
