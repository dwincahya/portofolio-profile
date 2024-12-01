import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/assets/components/Navbar";
import Footer from "@/assets/components/Footer";
import ScrollToTop from "./assets/hooks/ScrollToTop";
import { Suspense, lazy } from "react";
import Loading from "@/assets/components/Loading";

const Home = lazy(() => import("@/assets/pages/Home"));
const Skills = lazy(() => import("@/assets/pages/Skills"));
const Projects = lazy(() => import("@/assets/pages/Projects"));
const Experience = lazy(() => import("@/assets/pages/Experience"));
const Contact = lazy(() => import("@/assets/pages/Contact"));
const NotFound = lazy(() => import("@/assets/pages/NotFound"));

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default App;
