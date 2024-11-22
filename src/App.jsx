import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import NotFound from "./assets/pages/NotFound";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import Skills from "./assets/pages/Skills";

const App = () => {
  return (
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
      </Router>
  );
};

export default App;
