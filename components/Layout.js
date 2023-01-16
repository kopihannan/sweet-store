import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
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
