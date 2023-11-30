import React from "react";
import Header from "./components/Header";
import Slide from "./components/Slide"
// import About from "./components/About.js";
// import Services from "./components/Services";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Siempre Limpio</h1>
      <Header /> 
      <Slide />
      {/* <About />
      <Services />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
