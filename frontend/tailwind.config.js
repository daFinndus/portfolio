/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            cursor: {
                arrow: "url(./assets/cursors/arrow.cur)",
                link: "url(./assets/cursors/link.cur)",
            },
            fontFamily: {
                blenderpro: ["BlenderPro"],
                cyberpunk: ["Cyberpunk"],
                draco: ["Draco"],
                play: ["Play"],
            },
            textShadow: {
                sm: "0 1px 2px var(--tw-shadow-color)",
                default: "0 2px 4px var(--tw-shadow-color)",
                lg: "0 8px 16px var(--tw-shadow-color)",
            },
            colors: {
                transparent: "transparent",
                "cp-dark-red": "#500014",
                "cp-red": "#c5003c",
                "cp-yellow": "#fcee0a",
                "cp-blue": "#55ead4",
                "cp-dark-blue": "#2f796e",
            },
            keyframes: {
                blink: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0" },
                },
            },
            animation: {
                blink: "blink .75s linear infinite",
            },
        },
    },
    plugins: [
        plugin(function ({ matchUtilities, theme }) {
            matchUtilities(
                {
                    "text-shadow": (value) => ({
                        textShadow: value,
                    }),
                },
                { values: theme("textShadow") },
            );
        }),
    ],
};
