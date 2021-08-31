const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Rubik', ...defaultTheme.fontFamily.sans] 
			},
		},
	},
	variants: {},
	plugins: [],
};
