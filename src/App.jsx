import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { useLitratoStore } from "./store/litratoStore";

import Navigation from "./components/navigations/Navigation";
import Footer from "./components/navigations/Footer";
import ScrollToTop from "./ScrollToTop";

import Home from "./pages/home/Home";
import HomeService from "./pages/service/HomeService";
import HomeGallery from "./pages/gallery/HomeGallery";
import HomeContact from "./pages/contact/HomeContact";

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

          <Route path="/admin" element={user ? <AdminPanel /> : <Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
