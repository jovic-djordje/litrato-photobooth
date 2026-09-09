import "./admin.style.css";
import { useLitratoStore } from "../../store/litratoStore";
import { LuPanelLeftDashed, LuImage, LuStar, LuBox } from "react-icons/lu";
import { FiLogOut } from "react-icons/fi";
import { useEffect } from "react";

const AdminDashboard = ({ setPage }) => {
  const toggleSidebar = useLitratoStore((state) => state.toggleSidebar);
  const logout = useLitratoStore((state) => state.logout);

  const packages = useLitratoStore((state) => state.packages) || [];
  const galleries = useLitratoStore((state) => state.galleries) || [];
  const reviews = useLitratoStore((state) => state.reviews) || [];

  const fetchPackages = useLitratoStore((state) => state.fetchPackages);
  const fetchGalleries = useLitratoStore((state) => state.fetchGalleries);
  const fetchReviews = useLitratoStore((state) => state.fetchReviews);

  useEffect(() => {
    if (fetchPackages) fetchPackages();
    if (fetchGalleries) fetchGalleries();
    if (fetchReviews) fetchReviews();
  }, []);

  const handleLogout = async () => {
    try {
      if (logout) await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const pendingReviewsCount = reviews.filter(
    (r) => r.status === "pending",
  ).length;

  const dashCart = [
    {
      id: 1,
      cartName: "Active Galleries",
      number: galleries.length,
      text: "Passcode protected events",
      icon: <LuImage className="dash-cart-icon" />,
    },
    {
      id: 2,
      cartName: "Packages / Services",
      number: packages.length,
      text: "Available offers",
      icon: <LuBox className="dash-cart-icon" />,
    },
    {
      id: 3,
      cartName: "New Reviews",
      number: pendingReviewsCount,
      text: "Awaiting approval",
      icon: <LuStar className="dash-cart-icon" />,
    },
  ];

  const dashBtns = [
    {
      id: 1,
      icon: <LuBox className="dash-btn-icon" />,
      text: "Manage Packages",
      bg: "#ffffff8b",
      action: () => setPage("admin-services"),
    },
    {
      id: 2,
      icon: <LuImage className="dash-btn-icon" />,
      text: "View Galleries",
      bg: "#ffffff8b",
      action: () => setPage("admin-galleries"),
    },
    {
      id: 3,
      icon: <LuStar className="dash-btn-icon" />,
      text: "Moderate Reviews",
      bg: "#ffffff8b",
      action: () => setPage("admin-reviews"),
    },
  ];

  return (
    <section className="dash admin-dashboard">
      <div className="dash-holder">
        <div className="dash-header">
          <div className="dash-header-holder">
            <div className="dash-header-text-holder">
              <LuPanelLeftDashed
                className="dash-header-icon"
                onClick={toggleSidebar}
              />
              <div className="dash-header-text">
                <span>Dashboard</span>
                <p>Welcome to Litrato Photobooth admin</p>
              </div>
            </div>

            <button
              className="admin-special-header-btn admin-menu-header-btn"
              onClick={handleLogout}
            >
              <FiLogOut />
              Log Out
            </button>
          </div>
        </div>

        <div className="dash-details">
          <div className="dash-details-holder">
            <div className="dash-carts-holder">
              {dashCart.map((cart) => (
                <div className="dash-cart" key={cart.id}>
                  <div className="dash-cart-width">
                    <div className="dash-cart-heading">
                      <p>{cart.cartName}</p>
                      <div className="dash-cart-icon-holder">{cart.icon}</div>
                    </div>
                    <div className="dash-cart-info">
                      <span>{cart.number}</span>
                      <p>{cart.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="dash-btns-holder">
          {dashBtns.map((btn) => (
            <button
              key={btn.id}
              className="dash-btn"
              style={{ backgroundColor: btn.bg }}
              onClick={btn.action}
            >
              {btn.icon}
              <p>{btn.text}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
