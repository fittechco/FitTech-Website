import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      container: {
        center: true,
        padding: "0.75rem",
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        'mainColor': "#0C2840",
        'mainColorLight': "#0E304D",
        'mainColor2': "#133E63",
        'mainColor3': "#091E2F",
        'accentColor': "#339CF8",
        'accentColor2': "#5CB0F9",
        'accentColor3': "#0D8AF7",
        'thirdColor': "#EDEDED",
        'thirdColor3': "#D9D9D9"
      }
    },
  },
  plugins: [],
}
export default config
