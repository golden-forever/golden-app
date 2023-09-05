import { FunctionComponent, useEffect, useMemo, useState } from "react";
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
import { setFilters } from "../../../features/project/projectSlice";

// Icons

type Props = { applied: boolean };
const FilterEducation = ({ applied }: Props) => {
  const dispatch = useAppDispatch();
  const [localState, setLocalState] = useState(applied);
  useEffect(() => {
    setLocalState(applied);
  }, [applied]);

  const clearAllTags = () => {
    setLocalState(false);
    optimizedDebounce(false);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setLocalState(isChecked);
    optimizedDebounce(isChecked);
  };
  const debounce = () => {
    let timeoutID: string | number | NodeJS.Timeout | undefined;
    return (value: boolean) => {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        dispatch(setFilters({ is_top_schools_only: value }));
      }, 1000);
    };
  };
  const optimizedDebounce = useMemo(() => debounce(), []);
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
        <Button
          variant="text"
          color="secondary"
          sx={{ color: "secondary.dark" }}
          onClick={() => clearAllTags()}
        >
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
          control={<Checkbox checked={localState} onChange={handleChange} />}
          label="Top schools only"
        />
      </div>
    </div>
  );
};

export default FilterEducation;
