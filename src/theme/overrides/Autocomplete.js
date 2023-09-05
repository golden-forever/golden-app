// ----------------------------------------------------------------------

import { Box, autocompleteClasses, createFilterOptions } from "@mui/material";
const OPTIONS_LIMIT = 30;
const filterOptions = createFilterOptions({ limit: OPTIONS_LIMIT });

export default function Autocomplete(theme) {
  return {
    MuiAutocomplete: {
      defaultProps: {
        filterOptions: filterOptions,
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
        root: {
          "& .MuiInputBase-root": {
            "&.MuiOutlinedInput-root": { "& legend": { display: "none" } },
            "& .MuiInputBase-input": {
              color: "#334155",
              "::placeholder": { color: theme.palette.secondary.main },
              "&.MuiOutlinedInput-input": {},
            },
            "::before": { borderColor: "#64748B" },
            "&:hover": {
              "::before": { borderColor: "#64748B" },
            },
          },
          "& .MuiInputBase-root:hover::before": { borderColor: "#64748B" },
        },
        paper: {
          boxShadow: theme.customShadows.z20,
        },
      },
    },
  };
}
