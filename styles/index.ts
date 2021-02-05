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
      color: 'blackAlpha',
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
    secondary: {
      backgroundColor: 'black',
      color: 'white',
      border: '1px solid transparent',
      _hover: {
        // bg: '#fef21a',
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
  body: 'Ubuntu, system-ui, sans-serif',
  heading: 'Ubuntu, serif',
  mono: 'Menlo, monospace',
};

const overrides = {
  styles: {
    global: {
      body: {
        bg: 'blackAlpha.100',
      },
      p: {
        whiteSpace: 'pre-wrap',
      },

      a: {
        color: 'wiha.700',
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
    Menu,
    Table,
  },
};

export default extendTheme(overrides);
