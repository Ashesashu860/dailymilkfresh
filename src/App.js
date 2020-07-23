import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import ServiceAreas from "./pages/ServiceAreas/ServiceAreas";
import Products from "./pages/Products/Products";
import Loading from "./pages/Loading/Loading";
import "./index.css";
import "./headings.css";

const App = () => (
  <Suspense fallback={<Loading />}>
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/service_areas" component={ServiceAreas} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/how_it_works" component={HowItWorks} />
      <Footer />
    </BrowserRouter>
  </Suspense>
);

export default App;
