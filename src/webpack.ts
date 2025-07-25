import type { UnpluginFactoryOutput, WebpackPluginInstance } from "unplugin";
import { createWebpackPlugin } from "unplugin";

import unpluginFactory from "./core/unplugin-factory.js";
import type { FaviconsIconsPluginOptions, FaviconsLogoPluginOptions } from "./types.js";

export default createWebpackPlugin(unpluginFactory) as UnpluginFactoryOutput<FaviconsIconsPluginOptions | FaviconsLogoPluginOptions, WebpackPluginInstance>;
export type { FaviconsIconsPluginOptions, FaviconsLogoPluginOptions } from "./types.js";
