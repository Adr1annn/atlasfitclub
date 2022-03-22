module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px'
      },
      screens: {
        'sm': '1280px'
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
    },
    extend: {
      spacing: {
        '4px': '4px',
        '5px': '5px',
        '7px': '7px',
        '10px': '10px',
        '11px': '11px',
        '12px': '12px',
        '14px': '14px',
        '15px': '15px',
        '16px': '16px',
        '18px': '18px',
        '19px': '19px',
        '20px': '20px',
        '24px': '24px',
        '25px': '25px',
        '30px': '30px',
        '35px': '35px',
        '40px': '40px',
        '45px': '45px',
        '50px': '50px',
        '55px': '55px',
        '60px': '60px',
        '62px': '62px',
        '64px': '64px',
        '70px': '70px',
        '75px': '75px',
        '77px': '77px',
        '80px': '80px',
        '90px': '90px',
        '100px': '100px',
        '120px': '120px',
        '132px': '132px',
        '150px': '150px',
        '155px': '155px',
        '225px': '225px',
        '280px': '280px',
        '300px': '300px',
        '320px': '320px',
        '500px': '500px',
        '512px': '512px',
      },
    },
    colors: {
      'primary': '#2F0BC4',
      'secondary': '#1A1A1A',
      'gold': '#C09949',
      'white': '#FFFFFF',
      'black': '#000000',
      'gray': '#828282',
      'red': '#ff0000',
      'light-gray': '#e9ecf5'
    },
    textShadow: {
      'lg': '2px 2px 4px rgba(0, 0, 0, 1), 2px 2px 20px rgba(0, 0, 0, 1)',
    }
  },
  variants: {
    extend: {
      display: ['hover', 'focus', 'group-hover'],
      scale: ['group-hover'],
      backgroundColor: ['disabled']
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}