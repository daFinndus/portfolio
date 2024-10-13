/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            screens: {
                timeline: "1170px",
            },
            cursor: {
                arrow: "url(./assets/cursors/arrow.cur)",
                link: "url(./assets/cursors/link.cur)",
            },
            fontFamily: {
                blenderpro: ["BlenderPro"],
                cyberpunk: ["Cyberpunk"],
                draco: ["Draco"],
                play: ["Play"],
                vt323: ["VT323"],
            },
            textShadow: {
                sm: "0 1px 2px var(--tw-shadow-color)",
                default: "0 2px 4px var(--tw-shadow-color)",
                lg: "0 8px 16px var(--tw-shadow-color)",
            },
            colors: {
                transparent: "transparent",
                "dark-black": "#060606",
                "light-black": "#222222",
                "dark-gray": "#3c3c3c",
                "medium-gray": "#545454",
                "light-gray": "#818181",
                "cream-white": "#fcfbf4",
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
