import type { HtmlRspackPluginOptions, Compilation as RspackCompilation } from "@rspack/core";

const findHtmlRspackPlugin = (compilation: RspackCompilation): HtmlRspackPluginOptions | undefined => {
    const {
        compiler: { options },
    } = compilation;

    const Plugin = options.plugins.find((p) => p?.constructor?.name === "HtmlRspackPlugin")?.constructor;

    if (Plugin === undefined) {
        return undefined;
    }

    return Plugin as unknown as HtmlRspackPluginOptions;
};

export default findHtmlRspackPlugin;
