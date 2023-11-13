import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Path from "../../config/clientPath";
import { HomeComponent } from "./home";
import { Login } from "./login";
import { DetailProduct } from "./detailproduct";

export const PageDefault = () => {
  return (
    <Router>
      <Routes>
        <Route path={Path.HOME} element={<HomeComponent />} />
        <Route path={Path.LOGIN} element={<Login />} />
        <Route path={Path.DETAILS} element={<DetailProduct />} />
      </Routes>
    </Router>
  );
};
