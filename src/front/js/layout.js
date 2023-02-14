import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Single } from "./pages/single";
import { Login } from "./pages/login.jsx";
import { Profile } from "./pages/profile.jsx"
import injectContext from "./store/appContext";
import { Register} from "./pages/Register.jsx";


import { Footer } from "./component/footer";
import { Backto80s } from "./pages/Backto80s.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Routes>
          <Route element={<Login />} path="/login" />
          <Route element={<Backto80s />} path="/backto80s" />
          <Route element={<Register />} path="/register" />
          <Route element={<Home />} path="/" />
          <Route element={<Single />} path="/single/:theid" />
          <Route element={<Profile />} path="/user/:id" />
          <Route element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
