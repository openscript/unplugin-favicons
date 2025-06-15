import { createRollupPlugin } from "unplugin";

import unpluginFactory from "./core/unplugin-factory.js";

export default createRollupPlugin(unpluginFactory);
export type { FaviconsIconsPluginOptions, FaviconsLogoPluginOptions } from "./types.js";
