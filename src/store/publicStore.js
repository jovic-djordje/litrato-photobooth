import { create } from "zustand";

export const usePublicStore = create((set) => ({
  publicReviews: [],
  publicGalleries: [],
  packages: [],

  fetchPublicReviews: async () => {
    try {
      const { supabase } = await import("../library/supabase.js");
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

  fetchPublicGalleries: async () => {
    try {
      const { supabase } = await import("../library/supabase.js");
      const { data, error } = await supabase
        .from("galleries_public")
        .select("*")
        .order("id", { ascending: true });

      if (error) throw error;
      set({ publicGalleries: data || [] });
    } catch (err) {
      console.error("Error fetching public galleries:", err);
    }
  },

  fetchPackages: async () => {
    try {
      const { supabase } = await import("../library/supabase.js");
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

  submitReview: async (newReview) => {
    try {
      const { supabase } = await import("../library/supabase.js");
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

  verifyGalleryCode: async (galleryId, code) => {
    try {
      const { supabase } = await import("../library/supabase.js");
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
}));
