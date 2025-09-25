import { describe, expect, it } from "vitest";

import parseHtml from "../../src/core/parse-html.js";
import type { EmittedFile } from "../../src/types.js";

describe("parseHtml", () => {
    const mockEmittedFiles: EmittedFile[] = [
        {
            name: "favicon-16x16.png",
            resolvedName: "assets/favicon-16x16.png",
        },
        {
            name: "favicon-32x32.png", 
            resolvedName: "assets/favicon-32x32.png",
        },
    ];

    const mockHtmlFragments = [
        '<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">',
        '<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">',
    ];

    it("should generate relative paths by default", () => {
        const base = "/";
        const result = parseHtml(mockEmittedFiles, mockHtmlFragments, base);

        expect(result).toHaveLength(2);
        expect(result[0].attrs?.href).toBe("/assets/favicon-16x16.png");
        expect(result[1].attrs?.href).toBe("/assets/favicon-32x32.png");
    });

    it("should generate relative paths with custom base", () => {
        const base = "./dist/";
        const result = parseHtml(mockEmittedFiles, mockHtmlFragments, base);

        expect(result).toHaveLength(2);
        expect(result[0].attrs?.href).toBe("./dist/assets/favicon-16x16.png");
        expect(result[1].attrs?.href).toBe("./dist/assets/favicon-32x32.png");
    });

    it("should generate absolute paths when absolutePaths is true", () => {
        const base = "./dist/";
        const absolutePaths = true;
        const result = parseHtml(mockEmittedFiles, mockHtmlFragments, base, absolutePaths);

        expect(result).toHaveLength(2);
        expect(result[0].attrs?.href).toBe("/assets/favicon-16x16.png");
        expect(result[1].attrs?.href).toBe("/assets/favicon-32x32.png");
    });

    it("should handle resolvedName that already starts with /", () => {
        const emittedFilesWithSlash: EmittedFile[] = [
            {
                name: "favicon-16x16.png",
                resolvedName: "/assets/favicon-16x16.png",
            },
        ];
        const fragments = ['<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">'];
        
        const base = "./dist/";
        const absolutePaths = true;
        const result = parseHtml(emittedFilesWithSlash, fragments, base, absolutePaths);

        expect(result).toHaveLength(1);
        expect(result[0].attrs?.href).toBe("/assets/favicon-16x16.png");
    });

    it("should preserve other attributes", () => {
        const result = parseHtml(mockEmittedFiles, mockHtmlFragments, "/");

        expect(result[0].attrs?.rel).toBe("icon");
        expect(result[0].attrs?.type).toBe("image/png");
        expect(result[0].attrs?.sizes).toBe("16x16");
        expect(result[0].tag).toBe("link");
        expect(result[0].injectTo).toBe("head");
        expect(result[0].fragment).toBe('<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">');
    });

    it("should throw error when corresponding file is not found", () => {
        const fragmentsWithUnknownFile = [
            '<link rel="icon" type="image/png" sizes="16x16" href="unknown-file.png">',
        ];

        expect(() => {
            parseHtml(mockEmittedFiles, fragmentsWithUnknownFile, "/");
        }).toThrow("Unable to find a corresponding file for href: unknown-file.png");
    });
});