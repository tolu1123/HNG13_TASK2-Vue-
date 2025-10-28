// import { ref } from 'vue'

export const useAuth = () => {
  const { $supabase } = useNuxtApp()
  // const success = ref(false)
  // const error = ref<string | null>(null)

  // Sign up
  const signUp = async (username: string, email: string, password: string) => {
    // Verify that username is unique
    const { data, error } = await $supabase
      .from("profiles")
      .select("id")
      .eq("username", username)
      .maybeSingle();

    if (error) {
      //If there was an issue querying username
      return {
        error: "An error happened, Please retry!",
      };
    }

    // If data exist and is returned, it means username is being used
    // and they should use another one.
    if (data) {
      return {
        error: "Username has been taken",
      };
    }

    const { data: authData, error: error1 } = await $supabase.auth.signUp({
      email,
      password,
    });

    if (error1) {
      // An error happened while signning up
      return {
        error: error1 || null,
      };
    }

    // Insert username into profile
    const user = authData.user;
    if (!user)
      return {
        error: "Failed to create user",
      };

    // Create profile
    const { error: profileError } = await $supabase.from("profiles").insert({
      id: user.id,
      username,
    });

    if (profileError) {
      return {
        error: "Failed to create profile",
      };
    }

    return {
      success: true,
    };
  }

  // Login
  const login = async (email: string, password: string) => {
    const { error } = await $supabase.auth.signInWithPassword({ email, password });

    if (error) {
      // If an error happened while signing up
      return {
        error: error,
      };
    }

    return {
      success: true,
    };
  }

  // Logout
  const logout = async () => {
    await $supabase.auth.signOut()
  }

  // GetUser
  const getUser = async () => {
    const { data: { user }, error } = await $supabase.auth.getUser();
    return { user, error}
  }

  return {
    signUp,
    login,
    logout,
    getUser
  }
}
