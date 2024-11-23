import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import NotFound from "./assets/pages/NotFound";
import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import Loading from "./assets/components/Loading";
import useLoading from "./assets/hooks/Loading";
import Skills from "./assets/pages/Skills";
import Projects from "./assets/pages/Projects";
import Experience from "./assets/pages/Experience";
import Contact from "./assets/pages/Contact";

const App = () => {
  const loading = useLoading(500); 

  return (
    <Router>
      {loading && <Loading />}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
