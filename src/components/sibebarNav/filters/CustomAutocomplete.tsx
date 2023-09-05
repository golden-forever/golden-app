import * as React from "react";
import Box from "@mui/material/Box";
import { TextField, OutlinedInput } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import { createFilterOptions } from "@mui/material/Autocomplete";

type Props = {
  availableTags: string[];
  handleSelect: (tag: string) => void;
  marginLabel?: string;
  label?: string;
  placeholder?: string;
  autoFocus?: boolean;
};
const OPTIONS_LIMIT = 30;
export default function CustomAutocomplete({
  availableTags,
  handleSelect,
  marginLabel,
  label,
  placeholder,
  autoFocus,
}: Props) {
  const filterOptions = createFilterOptions({ limit: OPTIONS_LIMIT });
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: "100%" }}
      options={availableTags}
      filterOptions={filterOptions}
      autoHighlight
      getOptionLabel={option => {
        if (typeof option === "string") {
          return option;
        } else return "";
      }}
      onChange={(event, value) => {
        console.log(value);
        if (value) handleSelect(value as string);
      }}
      renderInput={params => (
        <TextField
          {...params}
          variant="standard"
          label={label}
          autoFocus={autoFocus}
          placeholder={placeholder}
          autoComplete="off"
          sx={{
            "& .MuiInputBase-root": {
              marginTop: marginLabel ? marginLabel : "16px",
            },
          }}
          inputProps={{
            ...params.inputProps,
            autoComplete: "off", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
