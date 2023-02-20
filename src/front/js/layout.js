import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Single } from "./pages/single";
import { Login } from "./pages/login.jsx";
import { Profile } from "./pages/profile.jsx";
import injectContext from "./store/appContext";
import { Register } from "./pages/Register.jsx";

import { Footer } from "./component/footer";
import { Backto80s } from "./pages/Backto80s.jsx";
import Navbar from "./component/navbar";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Routes>
          <Route element={<Register />} path="/register" />
          <Route element={<Login />} path="/login" />
          <Route element={<Backto80s />} path="/backto80s" />
          <Route element={<Register />} path="/register" />
          <Route element={<Home />} path="/" />
          <Route element={<Navbar />} path="/single/:id" />
          <Route element={<Profile />} path="/user/:id" />
          <Route element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
