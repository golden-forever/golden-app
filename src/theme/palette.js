import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#B2B2B2",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#666666",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const PRIMARY = {
  lighter: "#CAEDFF",
  light: "#CAEDFF",
  main: "#0A66C2",
  dark: "#103996",
  darker: "#061B64",
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#F5F5F5",
  light: "#EDEDED",
  main: "#B2B2B2",
  dark: "#666666",
  darker: "#191919",
  contrastText: "#fff",
};

const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#22C55E",
  dark: "#229A16",
  darker: "#08660D",
  contrastText: "#fff",
};

const WARNING = {
  lighter: "#FFF7CD",
  light: "#B2B2B2",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#191919",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE7D9",
  light: "#B2B2B2",
  main: "#666666",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const palette = {
  common: { black: "#000", white: "#fff" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  text: {
    primary: "#191919",
    secondary: "#666666",
    disabled: GREY[500],
  },
  divider: "#B2B2B2",
  background: {
    paper: "#fff",
    default: GREY[0],
    neutral: GREY[300],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
