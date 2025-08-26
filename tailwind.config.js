/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#1e40af', // Azul corporativo
				secondary: '#1e3a8a', // Azul más oscuro
				accent: '#facc15', // Amarillo dorado
			},
		},
	},
	plugins: [],
};
