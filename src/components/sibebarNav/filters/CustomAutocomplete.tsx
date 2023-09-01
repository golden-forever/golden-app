import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { createFilterOptions } from "@mui/material/Autocomplete";

type Props = {
  availableTags: string[];
  handleSelect: (tag: string) => void;
};
const OPTIONS_LIMIT = 30;
export default function CustomAutocomplete({
  availableTags,
  handleSelect,
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
          label="Choose a country"
          autoComplete="off"
          inputProps={{
            ...params.inputProps,
            autoComplete: "off", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
