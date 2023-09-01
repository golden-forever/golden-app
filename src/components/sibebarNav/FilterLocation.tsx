import { FunctionComponent, useEffect, useState } from "react";
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
import { getRequest } from "../../utils/apiHelper";
import { URLcities } from "../../utils/helpers";
const initialState = { minToDrive: 60, to: "", anywhere: false };
type Props = {};
const FilterLocation = ({}: Props) => {
  const [state, setState] = useState({ ...initialState });
  const [locations, setLocations] = useState<string[]>([]);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e?.target;
    let newValue: number | boolean | string = value;
    if (name === "minToDrive") newValue = Number(value);
    else if (name === "anywhere") {
      if (value === "true") newValue = true;
      else if (value === "false") newValue = false;
    }

    setState({ ...state, [name]: newValue });
  };
  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        const { data } = await getRequest(URLcities);
        setLocations(data);
      } catch (error) {
        console.log(error);
      }
    };
    asyncWrapper();
  }, []);
  const clearAll = () => {
    setState({ ...initialState });
  };
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
          Location
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
          value={state.minToDrive}
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
          value={state.to}
          onChange={handleChange}
          sx={{ width: "123px" }}
        />
      </Box>
      {/* From To Fields End*/}

      {/* Checkbox */}
      <FormControlLabel
        control={
          <Checkbox
            name="anywhere"
            value={state.anywhere}
            onChange={handleChange}
          />
        }
        label="Anywhere in Israel"
      />

      {/* Checkbox End */}
    </div>
  );
};

export default FilterLocation;
