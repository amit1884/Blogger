// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import "./assets/styles/common.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
