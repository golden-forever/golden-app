import { FunctionComponent, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  TextField,
  FormGroup,
  Slider,
  Stack,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

// Icons
import { Close, Add, Remove } from "@mui/icons-material";

type Props = {
  data: FilterLocation;
  clearAll: () => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};
const FilterLocation = ({ data, clearAll, handleChange }: Props) => {
  const [tag, setTag] = useState("");
  const { label, minToDrive, to, anywhere } = data;

  //   const handleAdd = () => {
  //     setIsAddNew(false);
  //     setTag("");
  //     addTag(data, tag);
  //   };
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
          {label}
        </h4>
        <Button variant="text" color="primary" onClick={clearAll}>
          Clear
        </Button>
      </div>

      {/* From To Fields */}
      <Box
        display={"flex"}
        alignItems={"center"}
        width={"100%"}
        columnGap={"8px"}
        justifyContent={"center"}
        m={"0 auto"}
      >
        {/* <Box display={"flex"} alignItems={"center"}> */}

        <input
          style={{ width: "50px" }}
          type="number"
          id="minToDrive"
          name="minToDrive"
          min="0"
          value={minToDrive}
          onChange={handleChange}
        />
        {/* </Box> */}
        <p>min. drive to</p>
        <TextField
          name="to"
          size="small"
          // label="Add tag"
          placeholder="e.g. Tel-Aviv"
          variant="standard"
          value={to}
          onChange={handleChange}
          sx={{ width: "123px" }}
        />
      </Box>
      {/* From To Fields End*/}

      {/* Checkbox */}
      <FormControlLabel
        control={
          <Checkbox name="anywhere" value={anywhere} onChange={handleChange} />
        }
        label="Anywhere in Israel"
      />

      {/* Checkbox End */}
    </div>
  );
};

export default FilterLocation;
