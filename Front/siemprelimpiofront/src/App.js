import React from "react";
import Header from "./components/Header";
import Slide from "./components/Slide"
import About from "./components/About.js";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header /> 
      <Slide />
      <Services />
      <About />
      <Footer />
    </div>
  );
}

export default App;
