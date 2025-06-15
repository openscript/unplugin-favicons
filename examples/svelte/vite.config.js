import { defineConfig } from "vite";
import faviconsPlugin from "@openscript/unplugin-favicons/vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
    plugins: [svelte(), faviconsPlugin()],
});
