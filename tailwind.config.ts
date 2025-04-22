// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}', // Important for Vite + React + TS
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

export default config
