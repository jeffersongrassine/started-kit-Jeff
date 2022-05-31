const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
        "./resources/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js"
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
                mono: ["Amsterdam"],
            },
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            c1: "#F7F7F7",
            c2: "#EDEDED",
            c3: "#DCD8D8",
            c4: "#6A6868",
            c5: "#373030",
            roxo1: "#966F95",
            roxo2: "#6D3E6C",
            roxo3: "#562855",
            rosa1: "#F8D1E5",
            rosa2: "#F1B8D5",
            rosa3: "#E096BC",
        },
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
          },
        //   fontWeight: {
        //     hairline: 100,
        //     'extra-light': 100,
        //     thin: 200,
        //     light: 300,
        //     normal: 400,
        //     medium: 500,
        //     semibold: 600,
        //     bold: 700,
        //     extrabold: 800,
        //     'extra-bold': 800,
        //     black: 900,
        //   }
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require('tw-elements/dist/plugin')
    ],
};
