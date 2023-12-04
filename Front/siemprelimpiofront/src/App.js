import React, {useState} from "react";
import Header from "./components/Header";
import Slide from "./components/Slide"
import About from "./components/About.js";
import Services from "./components/Services";
import Works from "./components/Works.js";
import RegistrationForm from "./components/Registration.js";
import Footer from "./components/Footer";
import MyCalendar from "./components/Calendar.js"

import "./App.css";

function App() {

  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isRegistrationOpenC, setIsRegistrationOpenC] = useState(false);

  const openRegistration = () => {
    setIsRegistrationOpen(true);
  };

  const closeRegistration = () => {
    setIsRegistrationOpen(false);
  };
  const openRegistrationC = () => {
    setIsRegistrationOpenC(true);
  };

  const closeRegistrationC = () => {
    setIsRegistrationOpenC(false);
  };
  return (
    <div>
      <Header openRegistration={openRegistration} openRegistrationC={openRegistrationC} /> 
      <Slide />
      <Services />
      <About />
      <Works />
      <Footer />
      {/* <MyCalendar /> */}
      
      {isRegistrationOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <RegistrationForm onClose={closeRegistration} />
        </div>
      )}
      {isRegistrationOpenC && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <MyCalendar onClose={closeRegistrationC} />
        </div>
      )}
    </div>
  );
}

export default App;
