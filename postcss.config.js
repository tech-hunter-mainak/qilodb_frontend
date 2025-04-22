// postcss.config.js
export default {
    plugins: {
        '@tailwindcss/postcss': {},
        autoprefixer: {},
        cssnano: {
            preset: 'default',
        },
    },
}
