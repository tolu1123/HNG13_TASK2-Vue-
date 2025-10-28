// eslint-disable-next-line
export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $supabase } = useNuxtApp();

  const protectedRoutes = ['/dashboard', '/ticket-management'];
  const isProtectedRoute = protectedRoutes.includes(to.path);

  if (!isProtectedRoute) {
    return;
  }

  // Use the manually created supabase client to get the session
  const { data: { session }, error } = await $supabase.auth.getSession();

  if (error || !session) {
    // Redirect to login if unauthenticated
    return navigateTo(`/login?redirect=${to.fullPath}`);
  }
});
