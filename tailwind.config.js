const colors = require('tailwindcss/colors')

module.exports = {
	mode: 'jit',
	darkMode: false,
	theme: {
		container: {
		center: true,
		padding: {
			DEFAULT: '2rem',
			sm: '2.5rem',
			md: '3rem',
			lg: '3.5rem',
			xl: '5rem',
		},
		},
		debugScreens: {
		position: ['bottom', 'right'],
		},
		colors: {
		transparent: 'transparent',
		current: 'currentColor',
		black: colors.black,
		white: colors.white,
		green: colors.emerald,
		gray: colors.coolGray,
		orange: colors.orange,
		indigo: colors.indigo,
		red: colors.rose,
		yellow: colors.amber,
		},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('tailwindcss-debug-screens'),
	],
	purge: ['./src/**/*.{js,md,njk,svg}'],
}