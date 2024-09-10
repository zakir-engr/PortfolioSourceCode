import { useState } from "react";
import Navbar from "./assets/Components/Navbar/Navbar";
import Developer from "./assets/Components/Developer/Developer";
import About from "./assets/Components/About/About";
import Services from "./assets/Components/Services/Services";
import Contact from "./assets/Components/Contact/Contact";
import Footer from "./assets/Components/Footer/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const DarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Navbar isDarkMode={isDarkMode} DarkMode={DarkMode} />
      <Developer />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
