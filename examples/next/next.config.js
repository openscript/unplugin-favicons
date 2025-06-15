import faviconsPlugin from "@openscript/unplugin-favicons/webpack";

/** @type {import('next').NextConfig} */
export default {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        config.plugins.push(faviconsPlugin());

        return config;
    },
};
