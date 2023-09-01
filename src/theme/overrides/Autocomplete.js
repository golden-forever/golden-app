// ----------------------------------------------------------------------

import { Box, autocompleteClasses } from "@mui/material";

export default function Autocomplete(theme) {
  return {
    MuiAutocomplete: {
      defaultProps: {
        renderOption: (props, option, state, ownerState) => (
          <Box
            sx={{
              borderRadius: "8px",
              margin: "5px",
              width: "100%",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              [`&.${autocompleteClasses.option}`]: {
                padding: "8px",
              },
            }}
            component="li"
            {...props}
          >
            {ownerState.getOptionLabel(option)}
          </Box>
        ),
      },
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z20,
        },
      },
    },
  };
}
