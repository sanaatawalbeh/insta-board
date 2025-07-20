import { useState } from "react";
import "./App.css";
import UserList from "./components/UserList/UserList";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../src/assets/instaBoardLogo.png";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <header className="App-header">
        <div className="brand">
          <img src={logo} alt="Logo" className="logo" />
          <h3>InstaBoard</h3>
        </div>

        <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </header>

      <UserList darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
