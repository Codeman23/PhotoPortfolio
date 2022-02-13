import React from "react";
//Global style
import GlobalStyle from "./components/GlobalStyle";

//Import Nav
import Nav from "./components/Nav";
//Import Pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
//Import from Router
import { Route, Routes, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion/dist/framer-motion";
//Scrolltop
import ScrollTop from "./components/ScrollTop";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Nav />
      <GlobalStyle />
      <ScrollTop />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<AboutUs />}></Route>
          <Route exact path="/work" element={<OurWork />}></Route>
          <Route path="/work/:id" element={<MovieDetail />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
