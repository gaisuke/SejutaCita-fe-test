import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavbarAlt from "./NavbarAlt";

const WithoutNav = () => {
  return (
    <>
      <NavbarAlt />
      <Outlet />
      <Footer />
    </>
  );
};

export default WithoutNav;
