import type { PostgrestError } from '@supabase/supabase-js'

interface Profile {
  username: string
}

type ProfileResponse = {
  profiles: Profile[] | null;
  profileError: PostgrestError | null;
}


export const useProfile = () => {
 const { $supabase } = useNuxtApp();

 const profiles = async () : Promise<ProfileResponse> => {
    const { data: profiles, error: profileError } = await $supabase
      .from("profiles").select("username")
      .returns<Profile[]>();



    return { profiles, profileError };
  };

  return {
    profiles
  }
} 