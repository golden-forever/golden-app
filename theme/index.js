import PropTypes from "prop-types";
import { useMemo } from "react";
// @mui
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
//
import { createPalette } from "./createPalette";

import { createShadows } from "./createShardows";
import { createComponents } from "./createComponents";
import { createTypography } from "./createTypography";
ThemeProvider.propTypes = {
  children: PropTypes.node,
};
export function ThemeProvider({ children }) {
  const palette = createPalette();
  const components = createComponents({ palette });
  const shadows = createShadows();
  const typography = createTypography();

  return createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440,
        xxl: 1600,
      },
    },
    components,

    palette,
    shadows,
    shape: {
      borderRadius: 8,
    },
    typography,
  });
}
