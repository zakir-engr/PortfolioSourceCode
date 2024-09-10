/* eslint-disable react/prop-types */
import "./Navbar.css";

function Navbar({ isDarkMode, DarkMode }) {
  const GoToBottom = () => {
    const footerElement = document.getElementById("footer");
    if (footerElement) {
      footerElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="navbar" className={`container ${isDarkMode ? "dark-mode" : ""}`}>
      <div className={`side-imag ${isDarkMode ? "dark-bg" : "light-bg"}`}></div>
      <ul>
        <li onClick={() => handleScroll("profileImg")}>Home</li>
        <li onClick={() => handleScroll("about")}>About Me</li>
        <li onClick={() => handleScroll("serviceContainer")}>Skills</li>
        <li onClick={() => handleScroll("contact")}>Contact</li>
      </ul>
      <div className="dark-mode-toggle" onClick={DarkMode}>
        <button className="dark-btn">
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
      <div>
        <button className="btm-btn" onClick={GoToBottom}>
          Go to Bottom
        </button>
      </div>
    </div>
  );
}

export default Navbar;
