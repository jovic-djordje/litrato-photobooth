import { create } from "zustand";
import { usePublicStore } from "./publicStore.js";

export const useAdminStore = create((set, get) => ({
  // SIDEBAR & NAVIGATION STATE
  isSidebarOpen: typeof window !== "undefined" ? window.innerWidth > 768 : true,
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),

  page: "dashboard",
  setPage: (newPage) => set({ page: newPage }),

  // DATA STATES
  reviews: [],
  galleries: [],
  inquiries: [],

  // REVIEWS LOGIC (ADMIN)
  fetchReviews: async () => {
    try {
      const { supabase } = await import("../library/supabase.js");
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
      const { supabase } = await import("../library/supabase.js");
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
      const { supabase } = await import("../library/supabase.js");
      const { error } = await supabase.from("reviews").delete().eq("id", id);
      if (error) throw error;
      await get().fetchReviews();
      return { success: true };
    } catch (err) {
      console.error("Error deleting review:", err);
      return { success: false, error };
    }
  },

  // GALLERIES LOGIC (ADMIN)
  fetchGalleries: async () => {
    try {
      const { supabase } = await import("../library/supabase.js");
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

  addGallery: async (newGallery) => {
    try {
      const { supabase } = await import("../library/supabase.js");
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
      const { supabase } = await import("../library/supabase.js");
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

  updateGallery: async (id, updatedGallery) => {
    try {
      const { supabase } = await import("../library/supabase.js");
      const payload = {
        title: updatedGallery.title,
        date: updatedGallery.date,
        access_code: updatedGallery.accessCode,
        external_url: updatedGallery.externalUrl,
        thumbnail_url: updatedGallery.thumbnailUrl || null,
      };

      const { error } = await supabase
        .from("galleries")
        .update(payload)
        .eq("id", id);

      if (error) throw error;
      await get().fetchGalleries();
      return { success: true };
    } catch (err) {
      console.error("Error updating gallery:", err);
      throw err;
    }
  },

  // PACKAGES / SERVICES — MUTACIJE (čitanje je u usePublicStore)
  addPackage: async (newPackage) => {
    try {
      const { supabase } = await import("../library/supabase.js");
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
      await usePublicStore.getState().fetchPackages();
      return { success: true };
    } catch (err) {
      console.error("Error adding package:", err);
      throw err;
    }
  },

  updatePackage: async (id, updatedPackage) => {
    try {
      const { supabase } = await import("../library/supabase.js");
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
      await usePublicStore.getState().fetchPackages();
      return { success: true };
    } catch (err) {
      console.error("Error updating package:", err);
      throw err;
    }
  },

  deletePackage: async (id) => {
    try {
      const { supabase } = await import("../library/supabase.js");
      const { error } = await supabase.from("specials").delete().eq("id", id);
      if (error) throw error;
      await usePublicStore.getState().fetchPackages();
      return { success: true };
    } catch (err) {
      console.error("Failed to delete package:", err);
      throw err;
    }
  },

  // INQUIRIES LOGIC
  fetchInquiries: async () => {
    try {
      const { supabase } = await import("../library/supabase.js");
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
    const { supabase } = await import("../library/supabase.js");
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    set({ user: data.user });
    return data.user;
  },

  checkSession: async () => {
    const { supabase } = await import("../library/supabase.js");
    const { data } = await supabase.auth.getSession();
    if (data?.session) {
      set({ user: data.session.user });
    }
  },

  logout: async () => {
    const { supabase } = await import("../library/supabase.js");
    await supabase.auth.signOut();
    set({ user: null });
  },
}));
