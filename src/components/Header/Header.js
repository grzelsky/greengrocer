import React, { useState, useEffect, Fragment } from "react";
import { Banner, Menu, Navigation, CartLink } from "./Header.css";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import fruits from "images/jablka.jpg";
import vegetables from "images/maliny.jpg";

const navList = [
  {
    name: "mainpage",
    path: "/",
  },
  {
    name: "fruits",
    path: "/fruits",
  },
  {
    name: "vegetables",
    path: "/vegetables",
  },
  {
    name: "delicacies",
    path: "/delicacies",
  },
];

const Header = ({ productsInCart }) => {
  const [banerData, setBanerData] = useState({
    banerImage: fruits,
    banerTxt: "Your daily dose of vitamins",
  });

  useEffect(() => {
    let active = 0;
    setInterval(() => {
      active++;
      if (active === 1) {
        setBanerData({
          banerImage: vegetables,
          banerTxt: "Straight from suppliers",
        });
      } else if (active > 1) {
        active = 0;
        setBanerData({
          banerImage: fruits,
          banerTxt: "Your daily dose of vitamins",
        });
      }
    }, 5000);
  }, []);

  const navigation = navList.map((li) => (
    <li key={li.name}>
      <NavLink to={li.path}>{li.name}</NavLink>
    </li>
  ));

  return (
    <Fragment>
      <Banner style={{ backgroundImage: `url(${banerData.banerImage})` }}>
        {" "}
        <h1>{banerData.banerTxt}</h1>
      </Banner>
      <Menu>
        <Navigation>{navigation}</Navigation>
        <CartLink>
          <NavLink to="/cart">
            cart
            {productsInCart.length > 0 ? (
              <span>{productsInCart.length}</span>
            ) : null}
          </NavLink>
        </CartLink>
      </Menu>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  productsInCart: state.productsCategoriesAndProducts.productsInCart,
});

export default connect(mapStateToProps)(Header);
