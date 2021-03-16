module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			m: '375px',
			d: '1440px',
		},
		colors: {
			white: '#fff',
			cyan: 'hsl(180, 66%, 49%)',
			darkViolet: 'hsl(257, 27%, 26%)',
			red: 'hsl(0, 87%, 67%)',
			gray: 'hsl(0, 0%, 75%)',
			grayishViolet: 'hsl(257, 7%, 63%)',
			veryDarkBlue: 'hsl(255, 11%, 22%)',
			veryDarkViolet: 'hsl(260, 8%, 14%)',
			bgcolor: '#EFF1F7',
		},
		fontFamily: {
			sans: ['Poppins'],
		},
		extend: {
			backgroundImage: (theme) => ({
				'shorten-desktop': "url('./images/bg-shorten-desktop.svg')",
				'shorten-mobile': "url('./images/bg-shorten-mobile.svg')",
				'boost-mobile': "url('./images/bg-boost-mobile.svg')",
				'boost-desktop': "url('./images/bg-boost-desktop.svg')",
			}),
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
