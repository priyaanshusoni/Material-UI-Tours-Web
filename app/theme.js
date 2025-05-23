'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
   components : {
    MuiTypography : {
      variants : [
        {
          props : {
            variant : "body2",
          },
          style : {
            fontSize : 11
          }
        },

          {
          props : {
            variant : "body3",
          },
          style : {
            fontSize : 9
          }
        }
      ]
    }
  }
});

export default theme;
