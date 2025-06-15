import faviconsPlugin from "@openscript/unplugin-favicons/rollup";

export default {
    input: `index.js`,
    output: {
        dir: "dist-assets",
        format: "es",
    },
    plugins: [faviconsPlugin()],
};
