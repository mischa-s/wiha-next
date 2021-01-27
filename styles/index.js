import { extendTheme } from "@chakra-ui/react";
// Global style overrides
// import styles from "./styles";
// Foundational style overrides
// import borders from "./foundations/borders";
// Component style overrides
// import Button from "./components/button";

const colors = {
  brightYellow: "#FEF001",

  wiha: {
    50: "#ffffdb",
    100: "#fffbad",
    200: "#fff87d",
    300: "#fef44b",
    400: "#fef21a",
    500: "#e5d801",
    600: "#b2a800",
    700: "#7f7800",
    800: "#4c4800",
    900: "#1a1800",
  },
};

const Button = {
  baseStyle: {
    borderRadius: "none",
  },
  variants: {
    navButton: {
      border: "1px solid black",
      color: "whiteAlpha.900",
      _hover: { border: "1px solid white" },
    },
    wiha: {
      backgroundColor: colors.brightYellow,
      color: "black",
    },
  },
};

const Input = {
  variants: {
    wiha: {
      field: {
        border: "2px solid",
        borderColor: "transparent",
        _hover: {
          borderColor: "wiha.500",
        },
        _focus: {
          borderColor: "wiha.500",
        },
        _readOnly: {
          boxShadow: "none !important",
          userSelect: "all",
        },
        _disabled: {
          opacity: 0.4,
          cursor: "not-allowed",
        },
        _invalid: {
          borderColor: "red.500",
        },
      },
      addon: {
        border: "2px solid",
        borderColor: "transparent",
      },
    },
  },
};

const Menu = {
  baseStyle: {
    list: {
      borderRadius: "none",
    },
  },
};

const overrides = {
  styles: {
    global: {
      body: {
        bg: "blackAlpha.100",
      },
    },
  },
  colors,
  components: {
    Button,
    Input,
    Menu,
  },
};

export default extendTheme(overrides);
