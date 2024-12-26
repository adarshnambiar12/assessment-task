/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,jsx,js,tsx,html}"],
	theme: {
		extend: {
			colors: {
				background: "#E7E6E1",
				button: "#F2A154",
				secondary: "#314E52",
				accent: "#F2A154"
			},
			fontFamily: {
				logo: ["Merriweather", "serif"],
				inter: ["Inter", "sans-serif"],
				slider : ["Libre Caslon Display", "serif"],
				heading : ["EB Garamond", "serif"]
			},
		}
	},
	plugins: [],
};