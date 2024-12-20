import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import React from 'react';

import '@fontsource/ubuntu/300.css';
import '@fontsource/ubuntu/400.css';
import '@fontsource/ubuntu/500.css';
import '@fontsource/ubuntu/700.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

type Props = {
  children?: React.ReactNode;
};

declare module '@mui/material/styles' {
  // index signature typegradients

  interface TypeGradient {
    [key: string]: string;
  }

  interface Palette {
    gradient: TypeGradient;
    text: TypeText2;
  }
  interface TypeColor {
    Darkest?: string;
    Darker?: string;
    Dark?: string;
    Base?: string;
    Light?: string;
    Lighter?: string;
    Lightest?: string;
    White?: string;
  }
  interface TypeText2 {
    primary: string;
    secondary: string;
    disabled: string;
  }

  interface TypeBackground {
    opposite: string;
  }
  interface TypographyVariants {
    CTA1: React.CSSProperties;
    CTA2: React.CSSProperties;
    CTA3: React.CSSProperties;
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    Body1: React.CSSProperties;
    Body2: React.CSSProperties;
    Body3: React.CSSProperties;
    Body1Medium: React.CSSProperties;
    Body1SemiBold: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    CTA1?: React.CSSProperties;
    CTA2?: React.CSSProperties;
    CTA3?: React.CSSProperties;
    body3?: React.CSSProperties;
    body4?: React.CSSProperties;
    Body1?: React.CSSProperties;
    Body2?: React.CSSProperties;
    Body3?: React.CSSProperties;
    Body1Medium?: React.CSSProperties;
    Body1SemiBold?: React.CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    CTA1: true;
    CTA2: true;
    CTA3: true;
    body3: true;
    body4: true;
    Body1: true;
    Body2: true;
    Body3: true;
    Body1Medium: true;
    Body1SemiBold: true;
  }
}

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = responsiveFontSizes(
    createTheme({
      palette: {
        mode: 'light',
        primary: {
          main: '#EAA79E',
        },

        secondary: {
          main: '#949EA0',
        },

        background: {
          default: '#FCFBFA',
          opposite: '#000000',
          paper: '#FCFCFC',
        },

        text: {
          primary: '#000000',
          secondary: '#999999',
          disabled: '#C3C1BD',
        },

        grey: {
          50: 'hsl(0, 5%, 95%)',
          100: 'hsl(0, 0%, 90%)',
          200: 'hsl(0, 0%, 80%)',
          300: 'hsl(0, 0%, 70%)',
          400: 'hsl(0, 0%, 60%)',
          500: 'hsl(0, 0%, 50%)',
          600: 'hsl(0, 0%, 40%)',
          700: 'hsl(0, 0%, 30%)',
          800: 'hsl(0, 0%, 20%)',
          900: 'hsl(0, 0%, 10%)',
        },
      },

      typography: {
        fontFamily: 'Montserrat, sans-serif',

        h1: {
          fontSize: '26px',
          fontWeight: '600',
          // lineHeight: '33px',
        },
        h2: {
          fontSize: '22px',
          fontWeight: '600',
          // lineHeight: '28px',
        },
        h3: {
          fontSize: '20px',
          fontWeight: '700',
          // lineHeight: '14px',
        },
        h4: {
          fontFamily: 'Ubuntu, sans-serif',
          fontSize: '20px',
          // lineHeight: '23px',
        },
        h5: {
          fontFamily: 'Ubuntu, sans-serif',
          fontSize: '12px',
          fontStyle: 'italic',
          // lineHeight: '20px',
        },

        CTA1: {
          fontSize: '28px',
          fontWeight: '500',
          // lineHeight: '35px',
        },
        CTA2: {
          fontSize: '18px',
          fontWeight: '500',
          // lineHeight: '23px',
        },
        CTA3: {
          fontSize: '16px',
          fontWeight: '400',
          // lineHeight: '20px',
        },
        Body1: {
          fontFamily: 'Ubuntu, sans-serif',
          fontSize: '25px',
          fontWeight: '300',
          // lineHeight: '18px',
        },
        Body2: {
          fontFamily: 'Ubuntu, sans-serif',
          fontSize: '18px',
          fontWeight: '400',
          // lineHeight: '16px',
        },
        Body3: {
          fontFamily: 'Ubuntu, sans-serif',
          fontSize: '10px',
          fontWeight: '400',
          // lineHeight: '14px',
        },
        Body1Medium: {
          fontFamily: 'Ubuntu, sans-serif',
          fontSize: '13px',
          fontWeight: '400',
          // lineHeight: '17px',
        },
        Body1SemiBold: {
          fontFamily: 'Ubuntu, sans-serif',
          fontSize: '14px',
          fontWeight: '600',
          // lineHeight: '17px',
        },
        body3: {
          fontSize: '12px',
          // lineHeight: '16px',
          display: 'block',
        },
        body4: {
          fontSize: '10px',
          // lineHeight: '14px',
          display: 'block',
        },
      },

      components: {
        MuiChip: { styleOverrides: { root: { color: 'white', fontFamily: 'Ubuntu', fontSize: '12px' } } },
        MuiDialog: {
          styleOverrides: {
            paperFullScreen: {
              position: 'absolute',
              bottom: 0,
              height: 'calc(100% - 80px)',
              marginTop: 'auto',
              boxShadow: 'none',
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: {
              textTransform: 'none',
              borderRadius: 20,
              display: 'block',
            },
            containedPrimary: {
              fontFamily: 'Ubuntu',
              color: 'white',
              background: 'linear-gradient(270deg, #ECBCB3 0%, #EAA79E 100%)',
              boxShadow: '0px 15px 20px 0px #EAA89F33',
            },
          },
        },
        MuiCssBaseline: {
          styleOverrides: {
            body: {
              // ---CSS BODY--- \\
            },
          },
        },
        MuiLink: {
          styleOverrides: {
            root: {
              cursor: 'pointer',
              textDecoration: 'none',
              lineHeight: '16px',
              transition: 'all 0.1s ease-in-out',
              '&:hover': {
                opacity: 0.8,
              },
            },
          },
        },
        MuiIconButton: {
          styleOverrides: {
            root: {
              aspectRatio: '1/1',
            },
          },
        },
      },
    }),
  );

  theme.components = {
    ...theme.components,
    MuiBackdrop: { styleOverrides: { root: { [theme.breakpoints.only('xs')]: { backgroundColor: 'transparent' } } } },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
