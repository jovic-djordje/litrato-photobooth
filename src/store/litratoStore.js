import { create } from "zustand";
import { supabase } from "../library/supabase.js";

export const useLitratoStore = create((set, get) => ({
  // SIDEBAR & NAVIGATION STATE
  isSidebarOpen: typeof window !== "undefined" ? window.innerWidth > 768 : true,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

  page: "dashboard",
  setPage: (newPage) => set({ page: newPage }),

  // DATA STATES
  packages: [],
  reviews: [],
  publicReviews: [],
  galleries: [], // Koristi se ISKLJUČIVO za Admin panel (puna tabela `galleries`)
  publicGalleries: [], // Koristi se ISKLJUČIVO za javnu stranicu (`galleries_public`)
  inquiries: [],

  // REVIEWS LOGIC
  fetchReviews: async () => {
    try {
      const { data, error } = await supabase
        .from("reviews")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      set({ reviews: data || [] });
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  },

  updateReviewStatus: async (id, newStatus) => {
    try {
      const { error } = await supabase
        .from("reviews")
        .update({ status: newStatus })
        .eq("id", id);

      if (error) throw error;
      await get().fetchReviews();
      return { success: true };
    } catch (err) {
      console.error("Error updating review status:", err);
      return { success: false, error };
    }
  },

  deleteReview: async (id) => {
    try {
      const { error } = await supabase.from("reviews").delete().eq("id", id);
      if (error) throw error;
      await get().fetchReviews();
      return { success: true };
    } catch (err) {
      console.error("Error deleting review:", err);
      return { success: false, error };
    }
  },

  submitReview: async (newReview) => {
    try {
      const payload = {
        clientname: newReview.clientName,
        comment: newReview.comment,
        status: "pending",
      };

      const { error } = await supabase.from("reviews").insert([payload]);

      if (error) throw error;
      return { success: true };
    } catch (err) {
      console.error("Error submitting review:", err);
      return { success: false, error: err };
    }
  },

  fetchPublicReviews: async () => {
    try {
      const { data, error } = await supabase
        .from("reviews")
        .select("id, clientname, comment, created_at")
        .eq("status", "approved")
        .order("created_at", { ascending: false })
        .limit(10);

      if (error) throw error;

      set({ publicReviews: data || [] });
    } catch (err) {
      console.error("Error fetching public reviews:", err);
    }
  },

  // GALLERIES LOGIC (ADMIN)
  fetchGalleries: async () => {
    try {
      const { data, error } = await supabase
        .from("galleries")
        .select("*")
        .order("id", { ascending: true });

      if (error) throw error;
      set({ galleries: data || [] });
    } catch (err) {
      console.error("Error fetching admin galleries:", err);
    }
  },

  // GALLERIES LOGIC (JAVNO)
  fetchPublicGalleries: async () => {
    try {
      const { data, error } = await supabase
        .from("galleries_public")
        .select("*")
        .order("id", { ascending: true }); // promijenjeno sa false na true

      if (error) throw error;
      set({ publicGalleries: data || [] });
    } catch (err) {
      console.error("Error fetching public galleries:", err);
    }
  },

  verifyGalleryCode: async (galleryId, code) => {
    try {
      const { data, error } = await supabase.rpc("verify_gallery_code", {
        gallery_id: galleryId,
        input_code: code,
      });

      if (error) throw error;
      return data;
    } catch (err) {
      console.error("Error verifying code:", err);
      return null;
    }
  },

  addGallery: async (newGallery) => {
    try {
      const payload = {
        title: newGallery.title,
        date: newGallery.date,
        access_code: newGallery.accessCode,
        external_url: newGallery.externalUrl,
        thumbnail_url: newGallery.thumbnailUrl || null,
      };

      const { data, error } = await supabase
        .from("galleries")
        .insert([payload])
        .select();

      if (error) throw error;

      if (data && data.length > 0) {
        set((state) => ({
          galleries: [...state.galleries, data[0]],
        }));
      } else {
        await get().fetchGalleries();
      }

      return { success: true, data };
    } catch (err) {
      console.error("Error adding gallery:", err);
      throw err;
    }
  },

  deleteGallery: async (id) => {
    try {
      const { error } = await supabase.from("galleries").delete().eq("id", id);
      if (error) throw error;

      set((state) => ({
        galleries: state.galleries.filter((g) => g.id !== id),
      }));

      return { success: true };
    } catch (err) {
      console.error("Error deleting gallery:", err);
      throw err;
    }
  },

  // PACKAGES / SERVICES LOGIC
  fetchPackages: async () => {
    try {
      const { data, error } = await supabase
        .from("specials")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) throw error;
      set({ packages: data || [] });
    } catch (err) {
      console.error("Error fetching packages:", err);
    }
  },

  addPackage: async (newPackage) => {
    try {
      const payload = {
        title: newPackage.title,
        investment: newPackage.investment,
        text: newPackage.text,
        point_one: newPackage.pointOne,
        point_two: newPackage.pointTwo,
        point_three: newPackage.pointThree,
        btn: newPackage.btn,
        image_url: newPackage.imgUrl,
      };
      const { error } = await supabase.from("specials").insert([payload]);

      if (error) throw error;
      await get().fetchPackages();
      return { success: true };
    } catch (err) {
      console.error("Error adding package:", err);
      throw err;
    }
  },

  updatePackage: async (id, updatedPackage) => {
    try {
      const payload = {
        title: updatedPackage.title,
        investment: updatedPackage.investment,
        text: updatedPackage.text,
        point_one: updatedPackage.pointOne,
        point_two: updatedPackage.pointTwo,
        point_three: updatedPackage.pointThree,
        btn: updatedPackage.btn,
        image_url: updatedPackage.imgUrl,
      };
      const { error } = await supabase
        .from("specials")
        .update(payload)
        .eq("id", id);

      if (error) throw error;
      await get().fetchPackages();
      return { success: true };
    } catch (err) {
      console.error("Error updating package:", err);
      throw err;
    }
  },

  deletePackage: async (id) => {
    try {
      const { error } = await supabase.from("specials").delete().eq("id", id);
      if (error) throw error;
      await get().fetchPackages();
      return { success: true };
    } catch (err) {
      console.error("Failed to delete package:", err);
      throw err;
    }
  },

  // INQUIRIES LOGIC
  fetchInquiries: async () => {
    try {
      const { data, error } = await supabase
        .from("inquiries")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      set({ inquiries: data || [] });
    } catch (err) {
      console.error("Error fetching inquiries:", err);
    }
  },

  // AUTH STATE
  user: null,

  login: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    set({ user: data.user });
    return data.user;
  },

  checkSession: async () => {
    const { data } = await supabase.auth.getSession();
    if (data?.session) {
      set({ user: data.session.user });
    }
  },

  logout: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },
}));
