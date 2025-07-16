import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Visitor = {
  id?: string;
  email: string;
  name: string;
  company?: string;
  phone?: string;
  interest?: string;
  message?: string;
  source?: string;
  created_at?: string;
  updated_at?: string;
};