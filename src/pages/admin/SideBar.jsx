import React from "react";
import { LuLayoutDashboard, LuImage, LuStar, LuBox } from "react-icons/lu";
import { useLitratoStore } from "../../store/litratoStore";
import "./admin.style.css";

const SideBar = ({ setPage, page }) => {
  const isOpen = useLitratoStore((state) => state.isSidebarOpen);
  const toggleSidebar = useLitratoStore((state) => state.toggleSidebar);

  const navItems = [
    { id: "admin-dashboard", label: "Dashboard", icon: LuLayoutDashboard },
    { id: "admin-services", label: "Packages & Services", icon: LuBox },
    { id: "admin-galleries", label: "Galleries & Passcodes", icon: LuImage },
    { id: "admin-reviews", label: "Reviews", icon: LuStar },
  ];

  const handleNavigation = (id) => {
    setPage(id);
    if (window.innerWidth <= 786) toggleSidebar();
  };

  return (
    <>
      {isOpen && <div className="sidebar-backdrop" onClick={toggleSidebar} />}

      <section className={`sideBar ${isOpen ? "open" : "closed"}`}>
        <div className="sideBarHolder">
          <div className="restaurant-name-holder">
            <div className="restaurant-name-text-holder">
              <span>Litrato Photobooth</span>
              <p>Admin Manager</p>
            </div>
          </div>

          <div className="menu-sideBar-holder">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className={`menu-sideBar-icon-holder ${page === item.id ? "active" : ""}`}
                  onClick={() => handleNavigation(item.id)}
                >
                  <Icon className="sideBar-icon" />
                  <p>{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default SideBar;
