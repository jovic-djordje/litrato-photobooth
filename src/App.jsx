import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navigation from "./components/navigations/Navigation";
import Footer from "./components/navigations/Footer";
import ScrollToTop from "./ScrollToTop";

import Home from "./pages/home/Home";
import HomeService from "./pages/service/HomeService";
import HomeGallery from "./pages/gallery/HomeGallery";
import HomeContact from "./pages/contact/HomeContact";

const AdminGate = lazy(() => import("./pages/admin/AdminGate"));

function PageLoader() {
  return (
    <div className="page-loader" aria-live="polite">
      Loading...
    </div>
  );
}

function App() {
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
          <Route path="/admin" element={<AdminGate />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
