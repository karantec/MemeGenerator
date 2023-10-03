import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import EditPage from "./pages/Edit";
import "./index.css";


function App() {
  return (
    <div className="container mx-[3rem]">
      <h1 className="text-[40px] font-medium" >Meme Generator</h1>
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
