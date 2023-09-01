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
import { Add, Remove } from "@mui/icons-material";

// Icons
const companySizes = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "501-1,000",
  "1,001-5,000",
  "5,001-10,000",
  "10,000+",
];
const initialSizes = ["201-500", "501-1,000", "1,001-5,000"];
type Props = {};
const FilterCompanySizes = ({}: Props) => {
  const [isAddNew, setIsAddNew] = useState(false);
  const [sizesToShow, setSizesToShow] = useState([...initialSizes]);
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
          Company sizes
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
        {sizesToShow.map(size => (
          <FormControlLabel
            sx={{ "& .MuiTypography-root": { fontSize: "14px" } }}
            control={
              <Checkbox
                name={size}
                // value={state.anywhere}
                // onChange={handleChange}
              />
            }
            label={size}
          />
        ))}
        <IconButton
          size="small"
          sx={{ marginLeft: "-5px", p: "1px" }}
          onClick={() => setIsAddNew(!isAddNew)}
        >
          {isAddNew ? <Remove /> : <Add />}
        </IconButton>
      </div>
    </div>
  );
};

export default FilterCompanySizes;
