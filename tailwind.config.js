module.exports = {
  	purge: [
    	'./src/**/*.html',
     	'./src/**/*.js',
     	'./src/**/*.vue',
  	],
  	darkMode: false, // or 'media' or 'class'
  	theme: {
		backgroundColor: theme => ({
			...theme('colors'),
			'loader-yellow': '#d49d48',
			'overlay': '#465b5d',
			'664886': '#664886',
			'E5E2EB': '#E5E2EB',
			'D49D48': '#D49D48',
			'5E9D7F': '#5E9D7F',
			'F2F8F8': '#F2F8F8',
			'F2F4F8': '#F2F4F8',
			'8269BD': '#8269BD',
			'F2FAFB': '#F2FAFB',
		}),
		borderColor: theme => ({
			...theme('colors'),
			'F2F3F7': '#F2F3F7',
			'F2FAFB': '#F2FAFB',
			'7AC6D7': '#7AC6D7',
			'4DD4E3': '#4DD4E3',
			'8269BD': '#8269BD',
			'D2E3E7': '#D2E3E7',
		}),
		textColor: {
			'5E9D7F': '#5E9D7F',
			'0D6964': '#0D6964',
			'11306D': '#11306D',
			'3E797E': '#3E797E',
			'A0A8AE': '#A0A8AE',
			'3F7992': '#3F7992',
			'6B737B': '#6B737B',
			'40243C': '#40243C',
			'8269BD': '#8269BD',
			'011728': '#011728',
			'white': '#fff',
			'black': '#000',
			'primary': '#3490dc',
			'secondary': '#ffed4a',
			'danger': '#e3342f',
		},
		borderRadius: {
			'r-10': '10px',
			'r-12': '12px',
			'r-14': '14px',
			'r-16': '16px',
			'r-18': '18px',
			'r-26': '26px',
			'r-28': '28px',
			'31.99': '31.99px',
			none: '0px',
			sm: '0.125rem',
			DEFAULT: '0.25rem',
			md: '0.375rem',
			lg: '0.5rem',
			xl: '0.75rem',
			'2xl': '1rem',
			'3xl': '1.5rem',
			full: '9999px',
		},
		width: (theme) => ({
			auto: 'auto',
			...theme('spacing'),
			'141px': '141px',
			'216px': '216px',
			'900px': '900px',
			'285px': '285px',
			'145px': '145px',
			'221px': '221px',
			'135px': '135px',
			'307px': '307px',
			'46px': '46px',
			'352px': '352px',
			'98px': '98px',
			'14px': '14px',
			'131px': '131px',
			'33px': '33px',
			'62px': '62px',
			'114px': '114px',
			'439px': '439px',
			'219px': '219px',
			'237px': '237px',
			'70-persen': '70%',
			'30-persen': '30%',
			'764px': '764px',
			'204px': '204px',
			'336px': '336px',
			'832px': '832px',
			'120px': '120px',
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			'1/12': '8.333333%',
			'2/12': '16.666667%',
			'3/12': '25%',
			'4/12': '33.333333%',
			'5/12': '41.666667%',
			'6/12': '50%',
			'7/12': '58.333333%',
			'8/12': '66.666667%',
			'9/12': '75%',
			'10/12': '83.333333%',
			'11/12': '91.666667%',
			full: '100%',
			screen: '100vw',
			min: 'min-content',
			max: 'max-content',
		}),
		height: (theme) => ({
			auto: 'auto',
			...theme('spacing'),
			'120px': '120px',
			'92px': '92px',
			'700px': '700px',
			'324px': '324px',
			'60px': '60px',
			'114px': '114px',
			'46px': '46px',
			'200px': '200px',
			'254px': '254px',
			'401px': '401px',
			'50px': '50px',
			'14px': '14px',
			'26px': '26px',
			'25px': '25px',
			'90px': '90px',
			'139px': '139px',
			'158px': '158px',
			'62px': '62px',
			'42px': '42px',
			'428px': '428px',
			'135px': '135px',
			'900px': '900px',
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			full: '100%',
			screen: '100vh',
		}),
		minHeight: {
			'324px': '324px',
			'158px': '158px',
			'428px': '428px',
			'900px': '900px',
			'595px': '595px',
			'430px': '430px',
			'208px': '208px',
			'96px': '96px',
			'0': '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			'full': '100%',
			screen: '100vh',
    	},
		minWidth: {
			'120px': '120px',
			'406.5px': '406.5px',
			'0': '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			'min': 'min-content',
			'max': 'max-content',
			'full': '100%',
		},
		// custom margin, max-height, padding
		spacing: {
			px: '1px',
			'120px': '120px',
			'155px': '155px',
			'156px': '156px',
			'157px': '157px',
			'158px': '158px',
			'159px': '159px',
			'19px': '19px',
			'2px': '2px',
			'3px': '3px',
			'252px': '252px',
			'46px': '46px',
			'92px': '92px',
			'90px': '90px',
			'5px': '5px',
			'6px': '6px',
			'7px': '7px',
			'9px': '9px',
			'10px': '10px',
			'11px': '11px',
			'52px': '52px',
			'-52px': '-52px',
			'-50px': '-50px',
			'50px': '50px',
			'122.5px': '122.5px',
			'70px': '70px',
			'9.8px': '9.8px',
			'75px': '75px',
			'33.6px': '33.6px',
			'60.9px': '60.9px',
			'2px': '2px',
			0: '0',
			0.5: '0.125rem',
			1: '0.25rem',
			1.5: '0.375rem',
			2: '0.5rem',
			2.5: '0.625rem',
			3: '0.75rem',
			3.5: '0.875rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			9: '2.25rem',
			10: '2.5rem',
			11: '2.75rem',
			12: '3rem',
			14: '3.5rem',
			16: '4rem',
			20: '5rem',
			24: '6rem',
			28: '7rem',
			32: '8rem',
			36: '9rem',
			40: '10rem',
			44: '11rem',
			48: '12rem',
			52: '13rem',
			56: '14rem',
			60: '15rem',
			64: '16rem',
			72: '18rem',
			80: '20rem',
			96: '24rem',
		},
    	extend: {
			// custom (top right bottom left)
			inset: {
				'-1024px': '-1024px',
				'-100px': '-100px',
				'-249px': '-249px',
				'-375px': '-375px',
				'-376px': '-376px',
				'-377px': '-377px',
				'-378px': '-378px',
				'-379px': '-379px',
				'-380px': '-380px',
				'-236px': '-236px',
				'-340px': '-340px',
				'-121px': '-121px',
				'-300px': '-300px',
				'-305px': '-305px',
				'-310px': '-310px',
				'-315px': '-315px',
				'-50px': '-50px',
				'-350px': '-350px',
				'-227.5px': '-227.5px',
			},
		},
  	},
  	variants: {
    	extend: {

		},
  	},
  	plugins: [

  	],
}
