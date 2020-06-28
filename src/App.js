import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import "./index.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <Route exact path="/" component={Home} />
    <Route exact path="/dailymilkfresh" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Footer />
  </BrowserRouter>
);

export default App;
