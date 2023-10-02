import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import EditPage from './pages/Edit';
import './App.css'; // Import the CSS file for additional styles

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
      <nav className="navbar">
        <div className="navbar-brand">MEME GENERATOR</div>
        <div className="navbar-links">
          <Link to="/" className="nav-link home">
            Home
          </Link>
          <button
            onClick={toggleDarkMode}
            className={`nav-link toggle-button ${isDarkMode ? 'dark' : 'light'}`}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<EditPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
