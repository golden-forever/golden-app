import { useEffect, useMemo, useState } from "react";
import { Box, Button, Slider } from "@mui/material";
import { setFilters } from "../../features/project/projectSlice";
import { useAppDispatch } from "../../hooks";

// Icons
type RangeArr = [number, number];
type Props = {
  min_years_of_experience_title: number;
  max_years_of_experience_title: number;
};
const MIN_VALUE = 1;
const MAX_VALUE = 20;

const YearsOfExperience = ({
  min_years_of_experience_title,
  max_years_of_experience_title,
}: Props) => {
  const [localValue, setLocalValue] = useState<RangeArr>([
    min_years_of_experience_title,
    max_years_of_experience_title,
  ]);
  useEffect(() => {
    setLocalValue([
      min_years_of_experience_title,
      max_years_of_experience_title,
    ]);
  }, [min_years_of_experience_title, max_years_of_experience_title]);
  const dispatch = useAppDispatch();
  const handleChange = (newValue: RangeArr) => {
    if (newValue[0] < MIN_VALUE) newValue[0] = MIN_VALUE;
    if (newValue[1] > MAX_VALUE) newValue[1] = MAX_VALUE;
    if (newValue[0] > newValue[1]) return;
    optimizedOnChange(newValue);
  };
  const debounce = () => {
    let timeoutID: any;
    return (newValue: RangeArr) => {
      setLocalValue(newValue);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        dispatch(
          setFilters({
            min_years_of_experience_title: newValue[0],
            max_years_of_experience_title: newValue[1],
          })
        );
      }, 1000);
    };
  };
  const optimizedOnChange = useMemo(() => debounce(), []);
  const clearAll = () => {
    setLocalValue([MIN_VALUE, MAX_VALUE]);
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
          Years of experience
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
        <label htmlFor="companySizeFrom">From</label>

        <input
          style={{ width: "50px" }}
          type="number"
          id="companySizeFrom"
          name="companySizeFrom"
          value={localValue[0]}
          onChange={e => {
            const tempRange: RangeArr = [...localValue];
            const fromValue = e.target.value;
            tempRange[0] = Number(fromValue);
            handleChange(tempRange);
          }}
          min={MIN_VALUE}
          max={localValue[1]}
        />
        {/* </Box> */}
        {/* <Box display={"flex"} alignItems={"center"}> */}
        <label htmlFor="companySizeTo">To</label>

        <input
          style={{ width: "50px" }}
          type="number"
          id="companySizeTo"
          name="companySizeTo"
          value={localValue[1]}
          onChange={e => {
            const tempRange: RangeArr = [...localValue];
            const toValue = e.target.value;
            tempRange[1] = Number(toValue);
            handleChange(tempRange);
          }}
          min={localValue[0]}
          max={MAX_VALUE}
        />
        {/* </Box> */}
        <p>employees</p>
      </Box>
      {/* From To Fields End*/}

      {/* Slider */}
      <Box width={"100%"}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={localValue}
          onChange={(e, value) => {
            if (Array.isArray(value)) {
              handleChange([value[0], value[1]]);
            }
          }}
          step={1}
          marks
          min={MIN_VALUE}
          max={MAX_VALUE}
          valueLabelDisplay="auto"
        />
        <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
          <span>Less than {MIN_VALUE}</span>
          <span>{MAX_VALUE}</span>
        </Box>
      </Box>
      {/* Slider End */}
    </div>
  );
};

export default YearsOfExperience;
