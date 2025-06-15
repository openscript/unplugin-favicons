import { createRspackPlugin } from "unplugin";

import unpluginFactory from "./core/unplugin-factory.js";

export default createRspackPlugin(unpluginFactory);
export type { FaviconsIconsPluginOptions, FaviconsLogoPluginOptions } from "./types.js";
