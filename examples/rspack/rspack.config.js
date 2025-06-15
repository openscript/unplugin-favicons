import FaviconsPlugin from "@openscript/unplugin-favicons/rspack";

export default {
    builtins: {
        html: [{ template: "./index.html" }],
    },
    entry: {
        main: "./index.js",
    },
    plugins: [FaviconsPlugin()],
};
