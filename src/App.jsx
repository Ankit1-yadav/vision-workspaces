import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./Pages/About";
import Services from "./Pages/Services";
import Home from "./Pages/Home1";

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