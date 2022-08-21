import { createMuiTheme } from '@material-ui/core/styles'

const xdealflowTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: ['Open Sans', 'sans-serif', '!important'],
 },
  palette: {
    primary: {
      main: '#ff0000',
      },
    secondary: {
      main: '#008896',
      },
  },
  status: {
    danger: {
      main: '#c11f1f',
      },
  },
});

export default xdealflowTheme
