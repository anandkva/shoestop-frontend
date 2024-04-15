import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Fav from "./component/fav/Fav";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./component/cart/Cart";
import Signup from "./component/signup/Signup";
import Login from "./component/login/Login";
import NavbarLog from "./component/navbar/NavbarLog";
import PrivateRoutes from "../utils/PrivateRoutes";
import SinglePage from "./component/single";

const App = () => {
  return (
    <div>
      <Router>
        <NavbarLog />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route element={<Home />} path="/" exact />
            <Route element={<Home />} path="/home" exact />
            <Route element={<Fav />} path="/fav" exact />
            <Route element={<Cart />} path="/cart" exact />
            <Route element={<SinglePage />} path="/single" exact />
          </Route>
          <Route element={<Signup />} path="/signup" />
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
