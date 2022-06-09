module.exports = {
	darkMode: "class",
	content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#202225",
				secondary: "#5865f2",
			},
		},
		fontFamily: {
			sans: ["Inter", "sans-serif"],
		},
	},
};
