import { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  IconButton,
  Box,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
type Props = {};
const includeOptions = [
  { label: "Current or Past", value: "all" },
  { label: "Past", value: "past" },
  { label: "Current", value: "current" },
];
const Include = ({}: Props) => {
  const [value, setValue] = useState("all");
  const [label, setLabel] = useState("Current or Past");
  const [isEdit, setIsEdit] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    const label = includeOptions.find(option => option.value === value)?.label;
    setValue(value);
    setIsEdit(false);
    if (label) setLabel(label);
  };
  return (
    <>
      {isEdit ? (
        <FormControl
          sx={{
            border: "1px solid #6666668c",
            width: "100%",
            p: "10px",
            borderRadius: "4px",
          }}
        >
          <FormLabel id="demo-radio-buttons-group-label">Include:</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            {includeOptions.map((option, i) => (
              <FormControlLabel
                value={option.value}
                control={<Radio />}
                label={option.label}
                key={i}
              />
            ))}
          </RadioGroup>
        </FormControl>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.25rem",
          }}
        >
          <div style={{ position: "relative" }}>Include:</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "0.25rem",
            }}
          >
            <div style={{ position: "relative", fontWeight: "600" }}>
              {label}
            </div>
          </div>
          <IconButton
            style={{ position: "relative" }}
            color="primary"
            onClick={() => setIsEdit(true)}
          >
            <EditOutlinedIcon />
          </IconButton>
        </Box>
      )}
    </>
  );
};
export default Include;
