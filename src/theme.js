import { Platform, Dimensions } from 'react-native'

const dimensions = Dimensions.get('window')

const primary = 'rgba(18, 25, 50, 1)'
const primary2 = 'rgba(27, 37, 77, 1)'
const primaryDark = 'rgba(14, 20, 43, 1)'
const primaryOpaque = opacity => `rgba(18, 25, 50, ${opacity})`

const primaryText = 'white'

const highlight = '#61dafb'

const colors = {
  primary,
  highlight,
  primary2,
  primaryDark,
  primaryOpaque,
  primaryText
}

const typography = {
  primary: "Gotham Rounded",
  secondary: "Gotham Rounded",
  medium: "GothamRnd Medium",
  bold: "Gotham Bold"
}


export {
  colors,
  typography,
  dimensions
}