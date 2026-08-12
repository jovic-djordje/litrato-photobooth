import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/navigations/Navigation";
import Home from "./pages/home/Home";
import Footer from "./components/navigations/Footer";
import HomeGallery from "./pages/gallery/HomeGallery";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<HomeGallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
