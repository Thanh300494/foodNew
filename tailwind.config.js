module.exports = {
  content: [
    './public/**/*.html',
    "./src/**/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        'brown':'#3D2516',
        'yellow':'#FFBC41'
      }
    },
    fontFamily: {
      Fredoka: ['Fredoka One', 'cursive'],
    },
    backgroundImage: {
      'bgBanner': "url('assets/image/bgBanner.png')",
      'bgFooter': "url('assets/image/bgFooter.png')",
    }
  },
  plugins: [],
}
