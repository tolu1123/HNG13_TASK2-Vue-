import { createClient } from '@supabase/supabase-js'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {

  const config = useRuntimeConfig();

  // Access public runtime config
  const supabaseUrl = config.public.supabaseUrl
  const supabaseKey = config.public.supabaseKey


  if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL or Key is missing from .env!')
  }
  
  const supabase = createClient(supabaseUrl, supabaseKey)

  return {
    provide: {
      supabase
    }
  }
})
