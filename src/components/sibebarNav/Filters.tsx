import { FunctionComponent, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  TextField,
  FormGroup,
} from "@mui/material";

// Filters Data
import {
  filtersData,
  filtersRangeData,
  filtersLocationData,
  filtersInputData,
} from "../../utils/constants";

// Icons

import Filter from "./Filter";
import FilterFromTo from "./FilterFromTo";
import FilterLocation from "./FilterLocation";
import FilterInput from "./FilterInput";

const Filters: FunctionComponent = () => {
  const [filters, setFilters] = useState([...filtersData]);
  const [filtersRange, setFiltersRange] = useState([...filtersRangeData]);
  const [filtersLocation, setFiltersLocation] = useState({
    ...filtersLocationData,
  });
  const [filtersInput, setFiltersInput] = useState([...filtersInputData]);

  const removeTag: RemoveTag = (filterData, removeIndex) => {
    const filtersTemp = [...filters];
    const newFilterData = filtersTemp.find(
      curFilter => curFilter === filterData
    );
    if (!newFilterData) return;
    newFilterData.applied.splice(removeIndex, 1);
    setFilters(filtersTemp);
  };
  const addTag: AddTag = (filterData, tag) => {
    const filtersTemp = [...filters];
    const newFilterData = filtersTemp.find(
      curFilter => curFilter === filterData
    );
    if (!newFilterData) return;
    newFilterData.applied.push(tag);
    setFilters(filtersTemp);
  };
  const clearAllTags = (filterData: Filter) => {
    const filtersTemp = [...filters];
    const newFilterData = filtersTemp.find(
      curFilter => curFilter === filterData
    );
    if (!newFilterData) return;
    newFilterData.applied = [];
    setFilters(filtersTemp);
  };
  const clearFilterRange = (filterRangeData: FilterRange) => {
    const filtersTemp = [...filtersRange];
    const newFilterData = filtersTemp.find(
      curFilter => curFilter === filterRangeData
    );
    if (!newFilterData) return;
    const { min, max } = newFilterData;
    newFilterData.value = [min, max];
    setFiltersRange(filtersTemp);
  };
  const handleRangeChange = (
    filterRangeData: FilterRange,
    value: [number, number]
  ) => {
    const filtersTemp = [...filtersRange];
    const newFilterData = filtersTemp.find(
      curFilter => curFilter === filterRangeData
    );
    if (!newFilterData) return;
    newFilterData.value = value;
    setFiltersRange(filtersTemp);
  };
  const addInputTag: AddTag = (filterData, tag) => {
    const filtersTemp = [...filtersInput];
    const newFilterData = filtersTemp.find(
      curFilter => curFilter === filterData
    );
    if (!newFilterData) return;
    newFilterData.applied.push(tag);
    setFiltersInput(filtersTemp);
  };
  const clearAllInputTags = (filterData: Filter) => {
    const filtersTemp = [...filtersInput];
    const newFilterData = filtersTemp.find(
      curFilter => curFilter === filterData
    );
    if (!newFilterData) return;
    newFilterData.applied = [];
    setFiltersInput(filtersTemp);
  };
  const clearAllLocationData = () => {
    setFiltersLocation({ ...filtersLocationData });
  };
  const handleLocationChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e?.target;
    let newValue: number | boolean | string = value;
    if (name === "minToDrive") newValue = Number(value);
    else if (name === "anywhere") {
      if (value === "true") newValue = true;
      else if (value === "false") newValue = false;
    }

    setFiltersLocation({ ...filtersLocation, [name]: newValue });
  };
  return (
    <div
      style={{
        alignSelf: "stretch",
        flex: "1",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1.5rem",
        textAlign: "left",
        fontSize: "0.88rem",
        color: "#191919",
        fontFamily: "'Noto Sans'",
        padding: "0 16px",
      }}
    >
      <Typography
        sx={{ color: "black", textAlign: "start", width: "100%" }}
        variant="h5"
      >
        Filters
      </Typography>

      {filters.map((filter, i) => (
        <Filter
          data={filter}
          key={i}
          removeTag={removeTag}
          addTag={addTag}
          clearAllTags={clearAllTags}
        />
      ))}
      {filtersRange.map((filter, i) => (
        <FilterFromTo
          data={filter}
          key={i}
          clearAll={clearFilterRange}
          handleRangeChange={handleRangeChange}
        />
      ))}

      <FilterLocation
        data={filtersLocation}
        clearAll={clearAllLocationData}
        handleChange={handleLocationChange}
      />

      {filtersInput.map((filter, i) => (
        <FilterInput
          data={filter}
          key={i}
          removeTag={removeTag}
          addTag={addInputTag}
          clearAllTags={clearAllInputTags}
        />
      ))}
    </div>
  );
};

export default Filters;
