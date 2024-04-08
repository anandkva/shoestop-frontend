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

const App = () => {
  const hasToken = !!localStorage.getItem("token");

  return (
    <Router>
      <NavbarLog />
      <Routes>
        {hasToken ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}
        <Route path="/home" element={<Home />} />
        <Route path="/fav" element={<Fav />} /> {/* Add your Fav component */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
