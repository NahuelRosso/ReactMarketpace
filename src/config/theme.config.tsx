import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";

type ThemeProp={
    children: JSX.Element
}

export enum themPalette {
    BG = "#f50057",
    Rosita= "#f73378",
    FONT_GLOBAL = "Raleway"
}

const theme = createTheme({
    palette:{
        mode:"dark",
        background:{
            default:themPalette.BG,
        },
        primary:{
            main:themPalette.Rosita
        },
    },
    typography:{
        fontFamily: themPalette.FONT_GLOBAL,
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform:"none",
                    borderRadius: "0.5em"
                }
            }
        }
    }
        
});

export const ThemeConfig: React.FC<ThemeProp> = ({children}) =>{
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );

};