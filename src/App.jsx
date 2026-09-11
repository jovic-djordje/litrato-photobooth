import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useLitratoStore } from "./store/litratoStore";

import Navigation from "./components/navigations/Navigation";
import Footer from "./components/navigations/Footer";
import ScrollToTop from "./ScrollToTop";

// Home ostavljamo normalno učitanim jer je početna stranica
import Home from "./pages/home/Home";

// Ostale stranice učitavaju se samo kada se otvori njihova ruta
const HomeService = lazy(() => import("./pages/service/HomeService"));
const HomeGallery = lazy(() => import("./pages/gallery/HomeGallery"));
const HomeContact = lazy(() => import("./pages/contact/HomeContact"));

// Admin se ne učitava za obične posjetioce
const AdminPanel = lazy(() => import("./pages/admin/AdminPanel"));
const Login = lazy(() => import("./pages/admin/Login"));

function PageLoader() {
  return (
    <div className="page-loader" aria-live="polite">
      Loading...
    </div>
  );
}

function App() {
  const user = useLitratoStore((state) => state.user);
  const checkSession = useLitratoStore((state) => state.checkSession);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  return (
    <Router>
      <ScrollToTop />

      <Suspense fallback={<PageLoader />}>
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

          {/* ADMIN ROUTE */}
          <Route path="/admin" element={user ? <AdminPanel /> : <Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
