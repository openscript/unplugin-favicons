import { createEsbuildPlugin } from "unplugin";

import unpluginFactory from "./core/unplugin-factory.js";

export default createEsbuildPlugin(unpluginFactory);
export type { FaviconsIconsPluginOptions, FaviconsLogoPluginOptions } from "./types.js";
