
import { createClient } from "@supabase/supabase-js";

// Create a Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://bvdirtlgdynyujbrbsdl.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ2ZGlydGxnZHlueXVqYnJic2RsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDExMDUxMzIsImV4cCI6MjA1NjY4MTEzMn0.A-WKhOFz_4e3unyBJSF7yRHRJCjWwH2h-sFS794Wrtw";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export const submitContactForm = async (formData: ContactFormData) => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([formData]);
    
    if (error) {
      console.error("Error submitting contact form:", error);
      throw error;
    }
    
    return { success: true };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};
