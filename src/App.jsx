import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLitratoStore } from "./store/litratoStore";

import Navigation from "./components/navigations/Navigation";
import Home from "./pages/home/Home";
import Footer from "./components/navigations/Footer";
import HomeService from "./pages/service/HomeService";
import HomeGallery from "./pages/gallery/HomeGallery";
import HomeContact from "./pages/contact/HomeContact";
import ScrollToTop from "./ScrollToTop";

import AdminPanel from "./pages/admin/AdminPanel";
import Login from "./pages/admin/Login";

function App() {
  const user = useLitratoStore((state) => state.user);
  const checkSession = useLitratoStore((state) => state.checkSession);

  useEffect(() => {
    checkSession();
  }, []);

  return (
    <Router>
      <ScrollToTop />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/service"
          element={
            <>
              <Navigation />
              <HomeService />
              <Footer />
            </>
          }
        />
        <Route
          path="/gallery"
          element={
            <>
              <Navigation />
              <HomeGallery />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navigation />
              <HomeContact />
              <Footer />
            </>
          }
        />

        {/* ADMIN ROUTE (Protected) */}
        <Route path="/admin" element={user ? <AdminPanel /> : <Login />} />
      </Routes>
    </Router>
  );
}

export default App;
