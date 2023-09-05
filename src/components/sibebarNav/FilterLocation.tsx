import { FunctionComponent, useEffect, useMemo, useState } from "react";
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
import { useAppDispatch } from "../../hooks";
import { setFilters } from "../../features/project/projectSlice";
import CustomAutocomplete from "./filters/CustomAutocomplete";
const initialState = { max_driving_time: 60, city_hq: "", anywhere: false };
type Props = { cities: string[] };
const FilterLocation = ({ cities }: Props) => {
  const [state, setState] = useState({ ...initialState });
  const [locations, setLocations] = useState<string[]>(cities);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setLocations(cities);
  }, [cities]);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e?.target;
    let newValue: number | boolean | string = value;
    if (name === "max_driving_time") newValue = Number(value);
    else if (name === "anywhere") {
      if (value === "true") newValue = true;
      else if (value === "false") newValue = false;
    }

    setState(prev => ({ ...prev, [name]: newValue }));
  };
  const debounce = () => {
    let timeoutID: string | number | NodeJS.Timeout | undefined;
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      handleChange(e);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        dispatch(setFilters({ [e.target.name]: e.target.value }));
      }, 1000);
    };
  };
  const optimizedDebounce = useMemo(() => debounce(), []);
  const autocompeteDebounce = () => {
    let timeoutID: string | number | NodeJS.Timeout | undefined;
    return (location: String) => {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        dispatch(setFilters({ city_hq: location }));
      }, 1000);
    };
  };
  const optimizedAutocompleteDebounce = useMemo(
    () => autocompeteDebounce(),
    []
  );
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
        <Button
          variant="text"
          color="secondary"
          sx={{ color: "secondary.dark" }}
          onClick={clearAll}
        >
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
          id="max_driving_time"
          name="max_driving_time"
          min="0"
          value={state.max_driving_time}
          onChange={handleChange}
        />
        {/* </Box> */}
        <Typography
          variant="body2"
          color={"secondary"}
          sx={{ whiteSpace: "nowrap" }}
        >
          min. drive to
        </Typography>

        <CustomAutocomplete
          availableTags={locations}
          handleSelect={optimizedAutocompleteDebounce}
          marginLabel="0px"
          placeholder="City"
        />
      </Box>
      {/* From To Fields End*/}

      {/* Checkbox */}
      <FormControlLabel
        control={
          <Checkbox
            name="anywhere"
            value={state.anywhere}
            onChange={optimizedDebounce}
          />
        }
        label="Anywhere in Israel"
      />

      {/* Checkbox End */}
    </div>
  );
};

export default FilterLocation;
