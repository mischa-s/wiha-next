import { extendTheme } from '@chakra-ui/react';
// Global style overrides
// import styles from "./styles";
// Foundational style overrides
// import borders from "./foundations/borders";
// Component style overrides
// import Button from "./components/button";

const colors = {
  brightYellow: '#FEF001',

  wiha: {
    50: '#ffffdb',
    100: '#fffbad',
    200: '#fff87d',
    300: '#fef44b',
    400: '#fef21a',
    500: '#e5d801',
    600: '#b2a800',
    700: '#7f7800',
    800: '#4c4800',
    900: '#1a1800',
  },

  blackScale: {
    900: '#000000',
    800: '#191919',
    700: '#323232',
    600: '#4c4c4c',
    500: '#666666',
    400: '#7f7f7f',
    300: '#999999',
    200: '#b2b2b2',
    100: '#cccccc',
    50: '#e5e5e5',
  },
};

const Table = {
  sizes: {
    sm: {
      td: {
        px: '.3rem',
        '@media (min-width: 450px)': {
          px: '1rem',
        },
      },
    },
  },
};

const Button = {
  baseStyle: {
    borderRadius: 'none',
  },

  sizes: {
    xl: {
      h: '20px',
      w: '350px',
      fontSize: '3xl',
      py: '3rem',
      fontWeight: 'normal',
    },
  },
  variants: {
    cta: {
      bg: 'rgba(255,255,255, 0.70)',
      color: 'black',
      fontWeight: 'bold',
      border: '1px solid transparent',

      _hover: {
        bg: 'rgb(255,255,255)',
        border: '1px solid black',
        textDecoration: 'none',
      },
    },
    navButton: {
      border: '1px solid black',
      color: 'whiteAlpha.900',
      _hover: { border: '1px solid white' },
    },
    wiha: {
      backgroundColor: '#fef21a',
      color: 'black',
      border: '1px solid transparent',
      _hover: {
        bg: '#fef21a',
        border: '1px solid black',
      },
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'black',
      border: '1px solid black',
      _hover: {
        bg: '#fef21a',
        border: '1px solid black',
      },
    },
    secondary: {
      backgroundColor: 'black',
      color: 'white',
      border: '1px solid transparent',
      _hover: {
        border: '1px solid white',
      },
    },
  },
};

const Input = {
  variants: {
    wiha: {
      field: {
        border: '2px solid',
        borderColor: 'transparent',
        _hover: {
          borderColor: 'wiha.500',
        },
        _focus: {
          borderColor: 'wiha.500',
        },
        _readOnly: {
          boxShadow: 'none !important',
          userSelect: 'all',
        },
        _disabled: {
          opacity: 0.4,
          cursor: 'not-allowed',
        },
        _invalid: {
          borderColor: 'red.500',
        },
      },
      addon: {
        border: '2px solid',
        borderColor: 'transparent',
      },
    },
  },
};

const Menu = {
  baseStyle: {
    list: {
      borderRadius: 'none',
    },
  },
};

const fonts = {
  body:
    "SourceSansPro, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  heading:
    "SourceSansPro, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  mono: 'Menlo, monospace',
};

const Link = {
  baseStyle: {
    textDecoration: 'underline',
  },
};

const overrides = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  styles: {
    global: {
      body: {
        bg: 'blackAlpha.100',
      },
      p: {
        whiteSpace: 'pre-wrap',
      },
      h1: {
        fontSize: '3xl',
        marginTop: '1rem',
        marginBottom: '1rem',
      },
      h2: {
        fontSize: '2xl',
        marginTop: '1rem',
        marginBottom: '1rem',
      },
      h3: {
        fontSize: 'xl',
        marginTop: '1rem',
        marginBottom: '1rem',
      },
      h4: {
        fontSize: 'lg',
        marginTop: '1rem',
        marginBottom: '1rem',
      },
      h5: {
        fontSize: 'md',
        marginTop: '1rem',
        marginBottom: '1rem',
      },
      h6: {
        fontSize: 'sm',
        marginTop: '1rem',
        marginBottom: '1rem',
      },
      a: {
        textDecoration: 'underline',
        _hover: {
          color: 'rgba(0, 0, 0, 0.70)',
        },
        _focus: {
          color: 'rgba(0, 0, 0, 0.70)',
        },
      },
      ul: {
        marginLeft: '1rem',
      },
      td: {},
    },
  },
  colors,
  fonts,
  components: {
    Button,
    Input,
    Link,
    Menu,
    Table,
  },
};

export default extendTheme(overrides);
