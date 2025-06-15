import react from "@vitejs/plugin-react";
import vike from "vike/plugin";

import faviconsPlugin from "@openscript/unplugin-favicons/vite";

export default {
    plugins: [react(), vike(), faviconsPlugin()],
};
