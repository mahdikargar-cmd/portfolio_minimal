/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backdropBlur: {
                xs: '2px',
                sm: '4px',
                md: '10px',
                lg: '20px',
            },
        },
    },
    plugins: [],
};