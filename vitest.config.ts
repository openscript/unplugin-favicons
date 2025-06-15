/// <reference types="vitest" />
import { defineConfig, configDefaults, coverageConfigDefaults } from "vitest/config";

export default defineConfig({
    test: {
        ...configDefaults,
        coverage: {
            ...coverageConfigDefaults,
            provider: "v8",
            reporter: ["clover", "cobertura", "lcov", "text"],
            include: ["src"],
            exclude: ["__fixtures__/**", "__bench__/**", "scripts/**"],
        },
        environment: "node",
        typecheck: {
            enabled: false,
        },
        exclude: [...configDefaults.exclude, "__fixtures__/**"],
    },
});
