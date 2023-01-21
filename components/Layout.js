import React from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>{children}</main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default Layout;
