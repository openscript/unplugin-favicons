import faviconsPlugin from "@openscript/unplugin-favicons/esbuild";

/** @typedef {import("@openscript/unplugin-favicons/esbuild").FaviconsLogoPluginOptions} config **/
const config = {
    logo: "./src/assets/favicon.png",
    outputPath: "assets/lexus/",
    cache: false,
    inject: false,
    favicons: {
        background: "#fffefc",
        icons: {
            android: true,
            appleIcon: true,
            appleStartup: false,
            favicons: true,
            windows: true,
            yandex: false,
        },
    },
};

export default faviconsPlugin(config);
