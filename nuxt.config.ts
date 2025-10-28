// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  app: {
    head: {
      title: "Ticketflow",
      meta: [{ name: "description", content: "Ticketing App" }],
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "shadcn-nuxt",
    // '@nuxtjs/supabase'
  ],
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  // supabase: {
  //   // You can either reference your env variables
  //   url: process.env.SUPABASE_URL || 'https://nkjaogsgtgmcayyafkxm.supabase.co',
  //   key: process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5ramFvZ3NndGdtY2F5eWFma3htIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzNTk3NzEsImV4cCI6MjA3NjkzNTc3MX0.4UZZa_fAV38q17aRlinmAcDo7koH0YbPNh4-iUL0zEM',
  //   // redirect: false, // optional, depending on your auth setup
  //   useSsrCookies: false,
  // },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_ANON_KEY,
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  // vue: {
  //   compilerOptions: {
  //     isCustomElement: tag => tag === 'v-icon'
  //   }
  // },
  fonts: {
    families: [
      { name: "Inter", provider: "google" },
      { name: "Roboto", provider: "google" },
    ],
  },
  components: [
    {
      path: '~/components',
      extensions: ['.vue']
    }
  ],
});
