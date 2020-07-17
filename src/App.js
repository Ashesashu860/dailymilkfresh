import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ServiceAreas from "./pages/ServiceAreas/ServiceAreas";
import Products from "./pages/Products/Products";
import "./index.css";
import "./headings.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <Route exact path="/" component={Home} />
    <Route exact path="/products" component={Products} />
    <Route exact path="/service_areas" component={ServiceAreas} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Footer />
  </BrowserRouter>
);

export default App;
