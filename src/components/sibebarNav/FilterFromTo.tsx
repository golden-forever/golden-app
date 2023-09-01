import { useMemo, useState } from "react";
import { Box, Button, Slider } from "@mui/material";

// Icons
type RangeArr = [number, number];
type Props = {};
const initialState: { value: RangeArr; min: number; max: number } = {
  value: [1, 20],
  min: 1,
  max: 20,
};
const YearsOfExperience = ({}: Props) => {
  const [state, setState] = useState({ ...initialState });

  const onFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = [...state.value];
    newValue[0] = Number(e.target.value);
    optimizedOnChange(newValue as RangeArr, state.value);
  };
  const onToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = [...state.value];
    newValue[1] = Number(e.target.value);
    optimizedOnChange(newValue as RangeArr, state.value);
  };
  const handChange = (value: [number, number]) => {
    setState({ ...state, value });
  };
  const debounce = () => {
    let timeoutID: any;
    return (newValue: RangeArr, curValue: RangeArr) => {
      setState({ ...state, value: newValue });
      console.log(newValue);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        if (newValue[0] <= newValue[1]) {
          if (newValue[0] < state.min) newValue[0] = state.min;
          if (newValue[1] > state.max) newValue[1] = state.max;
          // handleRangeChange(data, newValue);
        }
        // else {
        //   setLocalValue(curValue);
        // }
      }, 1000);
    };
  };
  const optimizedOnChange = useMemo(() => debounce(), []);
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
          Years of experience
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
        <label htmlFor="companySizeFrom">From</label>

        <input
          style={{ width: "50px" }}
          type="number"
          id="companySizeFrom"
          name="companySizeFrom"
          value={state.value[0]}
          onChange={onFromChange}
          min={state.min}
          max={state.value[1]}
        />
        {/* </Box> */}
        {/* <Box display={"flex"} alignItems={"center"}> */}
        <label htmlFor="companySizeTo">To</label>

        <input
          style={{ width: "50px" }}
          type="number"
          id="companySizeTo"
          name="companySizeTo"
          value={state.value[1]}
          onChange={onToChange}
          min={state.value[0]}
          max={state.max}
        />
        {/* </Box> */}
        <p>employees</p>
      </Box>
      {/* From To Fields End*/}

      {/* Slider */}
      <Box width={"100%"}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={state.value}
          onChange={(e, value) => {
            if (Array.isArray(value)) {
              handChange([value[0], value[1]]);
            }
          }}
          step={1}
          marks
          min={state.min}
          max={state.max}
          valueLabelDisplay="auto"
        />
        <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
          <span>Less than {state.min}</span>
          <span>{state.max}</span>
        </Box>
      </Box>
      {/* Slider End */}
    </div>
  );
};

export default YearsOfExperience;
