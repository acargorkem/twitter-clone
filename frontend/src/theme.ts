import { createTheme } from '@mui/material/styles'

// A custom theme for this app
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 1050,
      lg: 1250,
      xl: 1536,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#1d9bf0',
    },
    secondary: {
      main: '#ffffff',
    },
  },
})

export default theme
