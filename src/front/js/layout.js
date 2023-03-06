import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Single } from "./pages/single.jsx";
import { Login } from "./pages/login.jsx";
import { Profile } from "./pages/profile.jsx";
import injectContext from "./store/appContext";
import { Register } from "./pages/Register.jsx";
import { AboutUs } from "./pages/aboutUs.jsx";
import { Footer } from "./component/footer.js";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Routes>
          <Route element={<Register />} path="/register" />
          <Route element={<Login />} path="/login" />
          <Route element={<Login />} path="/" />
          <Route element={<Register />} path="/register" />
          <Route element={<Home />} path="/home" />
          <Route element={<Single />} path="/albums/:id" />
          <Route element={<Profile />} path="/profile/:id" />
          <Route element={<AboutUs />} path="/aboutus" />
          <Route element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
