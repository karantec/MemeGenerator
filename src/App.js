import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import EditPage from "./pages/Edit";
import { useState } from "react";

function App() {
  const [lightMode, setLightMode] = useState(true);

  return (
    <div
      style={{
        backgroundColor: lightMode ? "#fff" : "#333",
        paddingLeft: "5rem",
        paddingRight: "5rem",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ color: lightMode ? "#000" : "#fff" }}>Meme Generator</h1>
        <p
          style={{
            backgroundColor: lightMode ? "#333" : "#f5f5f5",
            color: lightMode ? "#f5f5f5" : "#333",
            padding: "0.5rem 1rem 0.5rem 1rem",
            marginTop: "0.5rem",
            borderRadius: "1.5rem",
            cursor: "pointer",
          }}
          onClick={() => {
            setLightMode(!lightMode);
          }}
        >
          TOGGLE DARK MODE
        </p>
      </div>
      <Routes>
        <Route path="/" element={<Home lightMode={lightMode} />} />
        <Route path="/edit" element={<EditPage lightMode={lightMode} />} />
      </Routes>
    </div>
  );
}

export default App;
