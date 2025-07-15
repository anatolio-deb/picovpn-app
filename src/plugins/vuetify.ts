/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// const myCustomLightTheme = {
//   dark: false,
//   colors: {
//     background: '#111318',
//     // surface:'#2A1458',
//     // 'surface-bright': '#2A1458',
//     // 'surface-light': '#2A1458',
//     // 'surface-variant': '#2A1458',
//     // 'on-surface-variant': '#2A1458',
//   }
// }

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    // themes: {
    //   myCustomLightTheme,
    // },
  },
})

