import { defineConfig } from "astro/config";
import faviconsPlugin from "@openscript/unplugin-favicons/vite";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [
            faviconsPlugin({
                inject: true,
            }),
        ],
    },
});
