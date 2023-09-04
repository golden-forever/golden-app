import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Toolbar(theme) {
  return {
    MuiToolbar: {
      defaultProps: {
        disableGutters: true,
      },
      styleOverrides: {
        root: {},
      },
    },
  };
}
