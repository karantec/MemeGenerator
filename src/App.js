import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import EditPage from './pages/Edit';
import './App.css'; // Import the CSS file for additional styles
import Footer from "./components/Footer"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [navLinksVisible, setNavLinksVisible] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const toggleNavLinks = () => {
    setNavLinksVisible(prevVisible => !prevVisible);
  };

  return (
    <>
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            MEME GENERATOR
          </Link>
          <button
            className={`navbar-toggler ${navLinksVisible ? 'collapsed' : ''}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={navLinksVisible ? 'true' : 'false'}
            aria-label="Toggle navigation"
            onClick={() => toggleNavLinks()}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${navLinksVisible ? 'show' : ''}`} id="navbarNav">
            <ul className={`navbar-nav ml-auto ${navLinksVisible ? 'df' : ''}`}>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <button
                  onClick={toggleDarkMode}
                  className={`nav-link toggle-button ${isDarkMode ? 'dark' : 'light'}`}
                >
                  {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<EditPage />} />
        </Routes>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
