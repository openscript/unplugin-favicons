import { createVitePlugin } from "unplugin";

import unpluginFactory from "./core/unplugin-factory.js";

export default createVitePlugin(unpluginFactory);
export type { FaviconsIconsPluginOptions, FaviconsLogoPluginOptions } from "./types.js";
