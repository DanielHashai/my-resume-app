import Header from "./Components/Header/Header";
import css from "./styles/app.module.scss";
import Hero from "../src/Components/Hero/Hero";
import Experties from "./Components/Experties/Experties";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
import React from "react";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Portfolio />
      <Experties />
      <Works />

      <Footer />
    </div>
  );
};

export default App;
