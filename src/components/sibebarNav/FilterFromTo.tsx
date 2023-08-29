import { FunctionComponent, useMemo, useState } from "react";
import { Box, Button, Slider } from "@mui/material";

// Icons
import { Close, Add, Remove } from "@mui/icons-material";
type RangeArr = [number, number];
type Props = {
  data: FilterRange;
  handleRangeChange: (filterRangeData: FilterRange, value: RangeArr) => void;
  clearAll: (data: FilterRange) => void;
};
const FilterFromTo = ({ data, clearAll, handleRangeChange }: Props) => {
  const [tag, setTag] = useState("");
  const { label, value, min, max } = data;
  const [localValue, setLocalValue] = useState([min, max]);
  //   const handleAdd = () => {
  //     setIsAddNew(false);
  //     setTag("");
  //     addTag(data, tag);
  //   };
  const onChange = (value: RangeArr) => {
    handleRangeChange(data, value);
    setLocalValue(value);
  };
  const onFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = [...value];
    newValue[0] = Number(e.target.value);
    optimizedOnChange(newValue as RangeArr, value);
  };
  const onToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = [...value];
    newValue[1] = Number(e.target.value);
    optimizedOnChange(newValue as RangeArr, value);
  };
  const debounce = () => {
    let timeoutID: any;
    return (newValue: RangeArr, curValue: RangeArr) => {
      setLocalValue(newValue);
      console.log(newValue);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        if (newValue[0] <= newValue[1]) {
          if (newValue[0] < min) newValue[0] = min;
          if (newValue[1] > max) newValue[1] = max;
          handleRangeChange(data, newValue);
        } else {
          setLocalValue(curValue);
        }
      }, 1000);
    };
  };
  const optimizedOnChange = useMemo(() => debounce(), []);
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
        <Button
          variant="text"
          color="primary"
          onClick={() => {
            clearAll(data);
            setLocalValue([min, max]);
          }}
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
          onChange={onFromChange}
          min={min}
          max={value[1]}
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
          onChange={onToChange}
          min={value[0]}
          max={max}
        />
        {/* </Box> */}
        <p>employees</p>
      </Box>
      {/* From To Fields End*/}

      {/* Slider */}
      <Box width={"100%"}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={(e, value) => {
            if (Array.isArray(value)) {
              onChange([value[0], value[1]]);
            }
          }}
          step={1}
          marks
          min={min}
          max={max}
          valueLabelDisplay="auto"
        />
        <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
          <span>Less than {min}</span>
          <span>{max}</span>
        </Box>
      </Box>
      {/* Slider End */}
    </div>
  );
};

export default FilterFromTo;
