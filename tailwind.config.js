/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "node_modules/flowbite-react/lib/esm/**/*.js"],
	theme: {
		extend: {
			fontFamily: {
				ubuntu: "Ubuntu Mono",
			},
			backgroundImage: {
				"aurora": "url('src/components/images/auroraLake.jpg')",
			},
		},
	},
	plugins: [],
};

