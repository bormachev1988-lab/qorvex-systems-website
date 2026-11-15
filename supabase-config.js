const SUPABASE_URL = "ВСТАВЬ_СЮДА_PROJECT_URL";
const SUPABASE_ANON_KEY = "ВСТАВЬ_СЮДА_PUBLISHABLE_KEY";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
