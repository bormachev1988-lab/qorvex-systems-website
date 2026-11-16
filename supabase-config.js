// QORVEX SYSTEMS — подключение Supabase
// Publishable key предназначен для использования в браузере.
// Права доступа обязательно ограничиваются RLS-политиками из setup.sql.
(() => {
  const SUPABASE_URL = "https://ntbmptodfcnazyqqcwtr.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_VqPBaF2_EvlDKXNAAfcfhQ_Co8HH8Cc";

  if (!window.supabase || !window.supabase.createClient) {
    console.error("Не загрузилась библиотека Supabase JS. Проверьте интернет и CDN.");
    return;
  }

  window.qorvexSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    }
  );
})();
