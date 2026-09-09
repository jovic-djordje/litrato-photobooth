import React, { useState, useEffect } from "react";
import { useLitratoStore } from "../../store/litratoStore";
import { LuPanelLeftDashed } from "react-icons/lu";

const AdminServices = () => {
  // 1. DOHVATANJE STOJA (identično kao u Dashboard-u)
  const toggleSidebar = useLitratoStore((state) => state.toggleSidebar);
  const packages = useLitratoStore((state) => state.packages) || [];
  const fetchPackages = useLitratoStore((state) => state.fetchPackages);
  const addPackage = useLitratoStore((state) => state.addPackage);
  const deletePackage = useLitratoStore((state) => state.deletePackage);

  useEffect(() => {
    if (fetchPackages) fetchPackages();
  }, [fetchPackages]);

  const [form, setForm] = useState({
    title: "",
    investment: "",
    text: "",
    pointOne: "",
    pointTwo: "",
    pointThree: "",
    btn: "INQUIRE",
    imgUrl: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.investment) return;

    if (addPackage) {
      addPackage(form);
    }

    setForm({
      title: "",
      investment: "",
      text: "",
      pointOne: "",
      pointTwo: "",
      pointThree: "",
      btn: "INQUIRE",
      imgUrl: "",
    });
  };

  return (
    <div className="admin-content-section">
      {/* HEADER SA TOGGLE SIDEBAR IKONOM */}
      <div className="admin-header">
        <div className="admin-header-title-row">
          <LuPanelLeftDashed
            className="dash-header-icon"
            onClick={toggleSidebar}
            style={{ cursor: "pointer" }}
          />
          <h2>PACKAGES & SERVICES</h2>
        </div>
        <p>Configure pricing, features and offer details</p>
      </div>

      <form onSubmit={handleSubmit} className="admin-form-card">
        <h3>Add New Package Card</h3>

        <input
          type="text"
          placeholder="Package Title (e.g. Package 1 or ADD-ONS)"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />

        <input
          type="text"
          placeholder="Investment Text (e.g. Investment - 650$)"
          value={form.investment}
          onChange={(e) => setForm({ ...form, investment: e.target.value })}
          required
        />

        <input
          type="url"
          placeholder="Image URL (e.g. https://.../photo.jpg)"
          value={form.imgUrl}
          onChange={(e) => setForm({ ...form, imgUrl: e.target.value })}
        />

        <textarea
          placeholder="Package Description Text..."
          value={form.text}
          onChange={(e) => setForm({ ...form, text: e.target.value })}
          rows={3}
          required
        />

        <input
          type="text"
          placeholder="Bullet Point 1 (e.g. 3 hours of booth coverage)"
          value={form.pointOne}
          onChange={(e) => setForm({ ...form, pointOne: e.target.value })}
        />

        <input
          type="text"
          placeholder="Bullet Point 2 (e.g. Unlimited prints & gallery access)"
          value={form.pointTwo}
          onChange={(e) => setForm({ ...form, pointTwo: e.target.value })}
        />

        <input
          type="text"
          placeholder="Bullet Point 3 (e.g. Custom details & props)"
          value={form.pointThree}
          onChange={(e) => setForm({ ...form, pointThree: e.target.value })}
        />

        <input
          type="text"
          placeholder="Button Label (e.g. INQUIRE)"
          value={form.btn}
          onChange={(e) => setForm({ ...form, btn: e.target.value })}
        />

        <button type="submit">Save Package Card</button>
      </form>

      <div className="admin-list">
        <h3>Existing Packages ({packages.length})</h3>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Investment</th>
              <th>Key Points</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {packages.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No packages found.
                </td>
              </tr>
            ) : (
              packages.map((item) => (
                <tr key={item.id || item._id}>
                  <td>
                    {item.imgUrl ? (
                      <img
                        src={item.imgUrl}
                        alt={item.title}
                        style={{
                          width: "50px",
                          height: "50px",
                          objectFit: "cover",
                          borderRadius: "6px",
                        }}
                      />
                    ) : (
                      <span style={{ fontSize: "0.8rem", color: "#888" }}>
                        No Image
                      </span>
                    )}
                  </td>
                  <td>
                    <strong>{item.title}</strong>
                  </td>
                  <td>
                    <code>{item.investment}</code>
                  </td>
                  <td>
                    <ul
                      style={{
                        paddingLeft: "16px",
                        margin: 0,
                        fontSize: "0.85rem",
                      }}
                    >
                      {item.pointOne && <li>{item.pointOne}</li>}
                      {item.pointTwo && <li>{item.pointTwo}</li>}
                      {item.pointThree && <li>{item.pointThree}</li>}
                    </ul>
                  </td>
                  <td>
                    <button
                      onClick={() =>
                        deletePackage && deletePackage(item.id || item._id)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminServices;
