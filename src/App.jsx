import { BrowserRouter, Routes, Route, Link  } from "react-router-dom";

import About from "./Pages/About";
import Services from "./Pages/Services";
import Home from "./Pages/Home1";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;