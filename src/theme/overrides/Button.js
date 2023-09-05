import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      variants: [
        {
          props: { size: "medium", variant: "contained" },
          style: { padding: "12px 24px" },
        },
        {
          props: { size: "medium", variant: "outlined" },
          style: { padding: "12px 24px" },
        },
        {
          props: { size: "small" },
          style: { padding: "8px 24px" },
        },
      ],
      styleOverrides: {
        root: {
          boxSizing: "border-box",
          "&:hover": {
            boxShadow: "none",
          },
          "&.MuiButton-outlinedSizeSmall": { padding: "7px 23px" },
          "&.MuiButton-outlinedSizeMedium": { padding: "11px 23px" },
        },

        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.customShadows.z8,
          "&:hover": {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedPrimary: {
          boxShadow: theme.customShadows.primary,
        },
        containedSecondary: {
          boxShadow: theme.customShadows.secondary,
        },
        outlinedInherit: {
          border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
        text: {
          minWidth: "20px",
          padding: "0",
          "&:hover": { background: "transparent" },
        },
        textInherit: {
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  };
}
