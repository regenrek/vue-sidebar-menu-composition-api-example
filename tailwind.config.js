/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        backdrop: 'rgba(19, 15, 64, .4)',
        Cgreen: '#7ebdb4',
        Cbeige1: '#f6d198',
        Cbeige2: '#f4a548',
        Cviolet: '#862a5c'
      },
      zIndex: {
        999: '999'
      },
      width: {
        300: '300px'
      }
    }
  },
  variants: {},
  plugins: []
}
