import { FunctionComponent, useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useAppDispatch } from "../../../hooks";

// Icons

type Props = {};
const FilterEducation = ({}: Props) => {
  const dispatch = useAppDispatch();
  const clearAllTags = () => {};
  return (
    <div
      style={{
        alignSelf: "stretch",
        borderBottom: "1px solid #b2b2b2",
        display: "flex",
        flexDirection: "column",
        padding: "1.25rem 0rem",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "1.25rem",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          fontSize: "1rem",
        }}
      >
        <h4
          style={{
            margin: "0",
            flex: "1",
            position: "relative",
            fontSize: "inherit",
            fontWeight: "600",
            fontFamily: "inherit",
          }}
        >
          Education
        </h4>
        <Button variant="text" color="primary" onClick={() => clearAllTags()}>
          Clear
        </Button>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "0.75rem",
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
            // value={state.anywhere}
            // onChange={handleChange}
            />
          }
          label="Top schools only"
        />
      </div>
    </div>
  );
};

export default FilterEducation;
