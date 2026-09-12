import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navigation from "./components/navigations/Navigation";
import Footer from "./components/navigations/Footer";
import ScrollToTop from "./ScrollToTop";

const Home = lazy(() => import("./pages/home/Home"));
const HomeService = lazy(() => import("./pages/service/HomeService"));
const HomeGallery = lazy(() => import("./pages/gallery/HomeGallery"));
const HomeContact = lazy(() => import("./pages/contact/HomeContact"));
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
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <main>
                  <Home />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/service"
            element={
              <>
                <Navigation />
                <main>
                  <HomeService />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/gallery"
            element={
              <>
                <Navigation />
                <main>
                  <HomeGallery />
                </main>
                <Footer />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <Navigation />
                <main>
                  <HomeContact />
                </main>
                <Footer />
              </>
            }
          />

          <Route path="/admin" element={<AdminGate />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
