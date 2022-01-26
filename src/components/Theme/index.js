import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

let ThemeComponent = createTheme({

    palette: {
        primary: {
          light: '#8B93A7',
          main:  '#19233C',
          dark:  'black',
          contrastText: '#FFFFFF',
          sectioncolor:'#EFF2F7',
          lightblue:'#7073BE'
        },
        secondary: {
          light: '#ff7961',
          main: '#f44336',
          dark: '#19233C', //darkblue
          contrastText: '#000',
        },
    },
    // breakpoints: {
    //   values: {
    //     xs: 360,
    //     sm: 600,
    //     md: 900,
    //     lg: 1200,
    //     xl: 1536,
    //   },
    // },

})
export default ThemeComponent