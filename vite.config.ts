import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import Icons from 'unplugin-icons/vite'

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths(), Icons({ compiler: 'qwik' })],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
