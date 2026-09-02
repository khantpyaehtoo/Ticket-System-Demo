import type { NextConfig } from "next";

const svgrOptions = {
    // Automatically replaces black/hex colors with currentColor
    replaceAttrValues: {
        "#000": "currentColor",
        "#000000": "currentColor",
        black: "currentColor",
    },
    // Removes width & height attributes so Tailwind w-* h-* classes work freely
    icon: true,
    svgo: true, // Clean Up SVG
    svgoConfig: {
        plugins: [
            {
                name: "preset-default",
                params: {
                    overrides: {
                        removeViewBox: false,
                    },
                },
            },
        ],
    },
};

const nextConfig: NextConfig = {
    /* config options here */
    turbopack: {
        rules: {
            "*.svg": {
                loaders: [{ loader: "@svgr/webpack", options: svgrOptions }],
                as: "*.js",
            },
        },
    },

    // SVG Loader Config
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [
                {
                    loader: "@svgr/webpack",
                    options: svgrOptions,
                },
            ],
        });
        return config;
    },
};

export default nextConfig;
