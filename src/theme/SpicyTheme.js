import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";


export const SpicyTheme = createTheme({
    palette:{
        primary:{
            main: '#711c1b'
        },
        secondary:{
            main: '#FFA500'
        },
        error:{
            main: red.A400
        }
    }
})