import React from "react";
import Header from "./components/Header";
import Slide from "./components/Slide"
import About from "./components/About.js";
import Services from "./components/Services";
import Works from "./components/Works.js";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header /> 
      <Slide />
      <Services />
      <About />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
