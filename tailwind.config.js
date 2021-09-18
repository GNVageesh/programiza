module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				darkbg: "#181818",
			},

			fontFamily: {
				megrim: ["Megrim", "sans-serif"],
				arima: ['"Arima Madurai"', "sans-serif"],
				varela: ["Varela", "sans-serif"],
			},
			boxShadow: {
				cardDark: "0 0 12px rgba(255, 255, 255, 0.6)",
				cardLight: "0 0 12px rgba(0, 0, 0, 0.6)",
			},
		},
	},
	variants: {
		extend: {
			animation: ["responsive", "motion-safe", "motion-reduce"],
		},
	},
	plugins: [],
};
