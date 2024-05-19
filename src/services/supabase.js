import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://epopxnkyeddsoadalmzp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwb3B4bmt5ZWRkc29hZGFsbXpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyMTgzMTgsImV4cCI6MjAyOTc5NDMxOH0.00s9D7IfYDF6vEtebs_vYKSlyk64EIybBPHpXdV0RBU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
