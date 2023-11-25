import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: 'var(--font-baloo)',
        sans: 'var(--font-roboto)',
      },
      gridTemplateColumns: {
        app: '1fr 480px',
      },
      backgroundImage: {
        app: "url('/background.png')",
      },
      borderRadius: {
        coffeSelected: '2.75rem',
      },
      width: {
        successWidth: '30rem',
      },
    },
  },
  plugins: [],
}
export default config
