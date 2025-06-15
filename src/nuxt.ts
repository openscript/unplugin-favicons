import { addVitePlugin, addWebpackPlugin, defineNuxtModule } from "@nuxt/kit";
import type { NuxtModule } from "@nuxt/schema";

import type { FaviconsIconsPluginOptions, FaviconsLogoPluginOptions } from "./types.js";
import vite from "./vite.js";
import webpack from "./webpack.js";

type ModuleOptions = FaviconsIconsPluginOptions | FaviconsLogoPluginOptions;

export default defineNuxtModule<ModuleOptions>({
    meta: {
        configKey: "unpluginFavicons",
        name: "nuxt-unplugin-favicons",
    },
    setup(options) {
        addVitePlugin(() => vite(options));
        addWebpackPlugin(() => webpack(options));
    },
}) as NuxtModule<ModuleOptions>;
export type { FaviconsIconsPluginOptions, FaviconsLogoPluginOptions } from "./types.js";
