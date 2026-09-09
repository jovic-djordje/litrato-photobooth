import { useState } from "react";
import SideBar from "./SideBar";
import AdminDashboard from "./AdminDashboard";
import AdminServices from "./AdminServices"; // Mijenja AdminMenu
import AdminGalleries from "./AdminGalleries"; // Novo
import AdminReviews from "./AdminReviews"; // Mijenja AdminSpecial
import "./admin.style.css";

const AdminPanel = () => {
  const [page, setPage] = useState("admin-dashboard");

  return (
    <div className="admin-holder">
      <SideBar setPage={setPage} page={page} />
      {page === "admin-dashboard" && <AdminDashboard setPage={setPage} />}
      {page === "admin-services" && <AdminServices />}
      {page === "admin-galleries" && <AdminGalleries />}
      {page === "admin-reviews" && <AdminReviews />}
    </div>
  );
};

export default AdminPanel;
