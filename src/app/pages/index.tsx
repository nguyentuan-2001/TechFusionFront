import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeComponent } from "./home";
import { Login } from "./login";
import Path from "../../config/clientPath";

export const PageDefault = () => {
  return (
    <Router>
      <Routes>
        <Route path={Path.HOME} element={<HomeComponent />} />
        <Route path={Path.LOGIN} element={<Login />} />
      </Routes>
    </Router>
  );
};
