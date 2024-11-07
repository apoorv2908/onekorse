import Home from "./Components/Body/Home";
import Aboutus from "./Components/Pages/AboutUs/Aboutus";
import Contactus from "./Components/Pages/ContactUs/Contactus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
