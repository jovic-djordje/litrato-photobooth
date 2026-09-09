import React, { useState, useEffect } from "react";
import { useLitratoStore } from "../../store/litratoStore";
import { LuPanelLeftDashed } from "react-icons/lu";

// Prazno početno stanje forme
const initialFormState = {
  title: "",
  date: "",
  accessCode: "",
  externalUrl: "",
  thumbnailUrl: "",
};

const AdminGalleries = () => {
  const toggleSidebar = useLitratoStore((state) => state.toggleSidebar);
  const galleries = useLitratoStore((state) => state.galleries) || [];
  const fetchGalleries = useLitratoStore((state) => state.fetchGalleries);
  const addGallery = useLitratoStore((state) => state.addGallery);
  const deleteGallery = useLitratoStore((state) => state.deleteGallery);

  useEffect(() => {
    if (fetchGalleries) fetchGalleries();
  }, [fetchGalleries]);

  const [form, setForm] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  // Ispravan način ažuriranja stanja preko prev state-a
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.accessCode || !form.externalUrl) return;

    setLoading(true);
    try {
      // Čekamo da Zustand upiše u bazu i osveži galerije
      await addGallery(form);
      // OBAVEZNO resetovanje forme na potpuno nov prazan objekat
      setForm(initialFormState);
    } catch (err) {
      console.error("Greška pri dodavanju galerije:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Jeste li sigurni da želite obrisati ovu galeriju?")) {
      await deleteGallery(id);
    }
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
          <h2>MANAGE EVENT GALLERIES</h2>
        </div>
        <p>Create and manage client photo albums and access codes</p>
      </div>

      <form onSubmit={handleSubmit} className="admin-form-card">
        <h3>Add New Gallery</h3>
        <input
          type="text"
          name="title"
          placeholder="Event Title (e.g. CRHS PROM)"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="date"
          placeholder="Date (e.g. 05-08-26)"
          value={form.date}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="thumbnailUrl"
          placeholder="Cover Thumbnail Image URL"
          value={form.thumbnailUrl}
          onChange={handleChange}
        />
        <input
          type="text"
          name="accessCode"
          placeholder="Access Code (Passcode for client)"
          value={form.accessCode}
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="externalUrl"
          placeholder="External Album Link (Google Drive / Dropbox / Pixieset)"
          value={form.externalUrl}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Saving..." : "Save Gallery"}
        </button>
      </form>

      <div className="admin-list">
        <h3>Existing Galleries ({galleries.length})</h3>
        <table>
          <thead>
            <tr>
              <th>Cover</th>
              <th>Title</th>
              <th>Date</th>
              <th>Passcode</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {galleries.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No galleries found.
                </td>
              </tr>
            ) : (
              galleries.map((item) => {
                const thumb = item.thumbnailUrl || item.thumbnail_url;
                return (
                  <tr key={item.id}>
                    <td>
                      {thumb ? (
                        <img
                          src={thumb}
                          alt={item.title}
                          style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "cover",
                            borderRadius: "4px",
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
                    <td>{item.date}</td>
                    <td>
                      <code>{item.accessCode || item.access_code}</code>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(item.id)}>
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

export default AdminGalleries;
