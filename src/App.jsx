import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Services from "./pages/Service";
import Home from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;