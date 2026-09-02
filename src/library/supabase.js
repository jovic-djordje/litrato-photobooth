import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL; // Iz Settings → API
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY; // Iz Settings → API

export const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
