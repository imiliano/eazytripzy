import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { SpicyTheme } from './SpicyTheme';


export const AppTheme = ({ children }) => {
    return(
    <ThemeProvider theme={ SpicyTheme }>

      <CssBaseline />

      { children }

    </ThemeProvider>
    )
}