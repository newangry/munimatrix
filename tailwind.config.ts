import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
        extend: {
            colors: {
                gray: {
                    50: "#4d5b65",
                    100: "#34434f",
                    200: "#011423",
                    400: "#333",
                    500: "#eee",
                    600: "#e6e6e6",
                },
                darkslategray: "#2e516c",
                white: "#fff",
                background: "#071e30",
                blue: {
                    50: "#4cafea",
                    100: "#2257a5",
                },
                border: "#203e56",
                green: "#4eaf8c",
                steelblue: {
                    100: "#3396d1",
                    200: "rgba(51, 150, 209, 0.09)",
                    300: "#70bfee",
                },
                "berlin-blue": "#163a56",
            },
            maxHeight: {
                "event-description": "405px",
                "accordion-container": "285px",
                "primary-type": "340px",
                "sub-type": "340px",
            },
            maxWidth: {
                "faq-description": "650px",
                "faq-list": "688px",
                "event-popup": "867px",
                "search-box": "572px",
                "event-summary": "330px",
                "table-row-item": "125px",
                "accordion-title": "173px",
            },
            width: {
                divider: "1px",
                "main-logo": "197px",
                scrollbar: "5px",
                "summary-collapse-button": "28px",
            },
            spacing: {
                13: "13",
                15: "15px",
                22: "22px",
                30: "30px",
                55: "55px",
            },
            height: {
                "main-logo": "50px",
                scrollbar: "55px",
                "sub-type": "340px",
            },
            minWidth: {
                "profile-popup": "265px",
            },
            fontFamily: {
                body: ["Mona Sans", "sans-serif"],
            },
            boxShadow: {
                "profile-popup": "2px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            },
        },
        fontSize: {
            tiny: "10px",
            xs: "11px",
            sm: "12px",
            md: "14px",
            lg: "16px",
            xl: "20px",
            "2xl": "28px",
        },
        screens: {
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            mq450: {
                raw: "screen and (max-width: 450px)",
            },
            "2xl": "1536px",
        },
    },
    corePlugins: {
        preflight: false,
    },
    plugins: [
    ],
} satisfies Config;
