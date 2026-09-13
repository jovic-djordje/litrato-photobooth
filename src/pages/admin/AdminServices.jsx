import React, { useState, useEffect } from "react";
import { useAdminStore } from "../../store/adminStore";
import { usePublicStore } from "../../store/publicStore";
import { LuPanelLeftDashed } from "react-icons/lu";

const emptyForm = {
  title: "",
  investment: "",
  text: "",
  pointOne: "",
  pointTwo: "",
  pointThree: "",
  btn: "INQUIRE",
  imgUrl: "",
};

const AdminServices = () => {
  const toggleSidebar = useAdminStore((state) => state.toggleSidebar);
  const packages = usePublicStore((state) => state.packages) || [];
  const fetchPackages = usePublicStore((state) => state.fetchPackages);
  const addPackage = useAdminStore((state) => state.addPackage);
  const updatePackage = useAdminStore((state) => state.updatePackage);
  const deletePackage = useAdminStore((state) => state.deletePackage);

  useEffect(() => {
    if (fetchPackages) fetchPackages();
  }, [fetchPackages]);

  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);

  const isEditing = editingId !== null;

  const startEdit = (item) => {
    setEditingId(item.id || item._id);
    setForm({
      title: item.title || "",
      investment: item.investment || "",
      text: item.text || "",
      pointOne: item.pointOne || item.point_one || "",
      pointTwo: item.pointTwo || item.point_two || "",
      pointThree: item.pointThree || item.point_three || "",
      btn: item.btn || "INQUIRE",
      imgUrl: item.imgUrl || item.img_url || item.image_url || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.investment) return;

    setSaving(true);
    try {
      if (isEditing) {
        await updatePackage(editingId, form);
      } else {
        await addPackage(form);
      }
      setEditingId(null);
      setForm(emptyForm);
    } catch (err) {
      console.error("Error saving the package:", err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (id === editingId) cancelEdit();
    if (deletePackage) await deletePackage(id);
  };

  return (
    <div className="admin-content-section">
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
        <h3>{isEditing ? "Edit Package Card" : "Add New Package Card"}</h3>

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

        <div style={{ display: "flex", gap: "10px" }}>
          <button type="submit" disabled={saving}>
            {saving
              ? "Saving..."
              : isEditing
                ? "Update Package Card"
                : "Save Package Card"}
          </button>
          {isEditing && (
            <button type="button" onClick={cancelEdit} disabled={saving}>
              Cancel
            </button>
          )}
        </div>
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
              packages.map((item) => {
                const itemId = item.id || item._id;
                return (
                  <tr
                    key={itemId}
                    style={
                      editingId === itemId
                        ? { outline: "2px solid #282828" }
                        : undefined
                    }
                  >
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
                    <td style={{ display: "flex", gap: "8px" }}>
                      <button onClick={() => startEdit(item)}>Edit</button>
                      <button onClick={() => handleDelete(itemId)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminServices;
