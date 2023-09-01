import { FunctionComponent, useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  TextField,
  FormGroup,
} from "@mui/material";

// Filters Data
// import {
//   filtersData,
//   filtersRangeData,
//   filtersLocationData,
//   filtersInputData,
// } from "../../utils/constants";
import {
  URLtitles,
  URLcities,
  URLindustries,
  URLspecialities,
  URLcompanies,
} from "../../utils/helpers";
// Icons

import Filter from "./Filter";
import FilterFromTo from "./FilterFromTo";
import FilterLocation from "./FilterLocation";
import FilterInput from "./FilterInput";
import { useAppSelector } from "../../hooks";
import { getRequest } from "../../utils/apiHelper";
import { skillsAndKeywords } from "../../_mock/filters";
import FilterCompanySizes from "./filters/FilterCompanySizes";
import FilterEducation from "./filters/FilterEducation";
type Autocomplete = {
  titles: string[];
  companies: string[];

  keywords: string[];

  specialities: string[];
};
const initialFilters: Autocomplete = {
  titles: [],
  companies: [],

  // company_sizes,
  keywords: skillsAndKeywords,

  specialities: [],
};
const Filters: FunctionComponent = () => {
  const [autocompletes, setAutocompletes] =
    useState<Autocomplete>(initialFilters);
  useEffect(() => {
    const asyncWrapper = async () => {
      try {
        const titlesRes = await getRequest(URLtitles);
        const companiesRes = await getRequest(URLcompanies);
        const specialitiesRes = await getRequest(URLspecialities);
        const industriesRes = await getRequest(URLindustries);
        const titles = titlesRes.data;
        const companies = companiesRes.data;
        const specialities = specialitiesRes.data;
        const industries = industriesRes.data;

        setAutocompletes(prev => ({
          ...prev,
          titles,
          companies,

          specialities: [...specialities, ...industries],
        }));
      } catch (error) {
        console.log(error);
      }
    };
    asyncWrapper();
  }, []);
  const { search_query } = useAppSelector(store => store.project);

  // const [filters, setFilters] = useState([...filtersData]);
  // const [filtersRange, setFiltersRange] = useState([...filtersRangeData]);
  // const [filtersLocation, setFiltersLocation] = useState({
  //   ...filtersLocationData,
  // });
  // const [filtersInput, setFiltersInput] = useState([...filtersInputData]);

  // const removeTag: RemoveTag = (filterData, removeIndex) => {
  //   const filtersTemp = [...filters];
  //   const newFilterData = filtersTemp.find(
  //     curFilter => curFilter === filterData
  //   );
  //   if (!newFilterData) return;
  //   newFilterData.applied.splice(removeIndex, 1);
  //   setFilters(filtersTemp);
  // };
  // const addTag: AddTag = (filterData, tag) => {
  //   const filtersTemp = [...filters];
  //   const newFilterData = filtersTemp.find(
  //     curFilter => curFilter === filterData
  //   );
  //   if (!newFilterData) return;
  //   newFilterData.applied.push(tag);
  //   setFilters(filtersTemp);
  // };
  // const clearAllTags = (filterData: Filter) => {
  //   const filtersTemp = [...filters];
  //   const newFilterData = filtersTemp.find(
  //     curFilter => curFilter === filterData
  //   );
  //   if (!newFilterData) return;
  //   newFilterData.applied = [];
  //   setFilters(filtersTemp);
  // };
  // const clearFilterRange = (filterRangeData: FilterRange) => {
  //   const filtersTemp = [...filtersRange];
  //   const newFilterData = filtersTemp.find(
  //     curFilter => curFilter === filterRangeData
  //   );
  //   if (!newFilterData) return;
  //   const { min, max } = newFilterData;
  //   newFilterData.value = [min, max];
  //   setFiltersRange(filtersTemp);
  // };
  // const handleRangeChange = (
  //   filterRangeData: FilterRange,
  //   value: [number, number]
  // ) => {
  //   const filtersTemp = [...filtersRange];
  //   const newFilterData = filtersTemp.find(
  //     curFilter => curFilter === filterRangeData
  //   );
  //   if (!newFilterData) return;
  //   newFilterData.value = value;
  //   setFiltersRange(filtersTemp);
  // };
  // const addInputTag: AddTag = (filterData, tag) => {
  //   const filtersTemp = [...filtersInput];
  //   const newFilterData = filtersTemp.find(
  //     curFilter => curFilter === filterData
  //   );
  //   if (!newFilterData) return;
  //   newFilterData.applied.push(tag);
  //   setFiltersInput(filtersTemp);
  // };
  // const clearAllInputTags = (filterData: Filter) => {
  //   const filtersTemp = [...filtersInput];
  //   const newFilterData = filtersTemp.find(
  //     curFilter => curFilter === filterData
  //   );
  //   if (!newFilterData) return;
  //   newFilterData.applied = [];
  //   setFiltersInput(filtersTemp);
  // };
  // const clearAllLocationData = () => {
  //   setFiltersLocation({ ...filtersLocationData });
  // };
  // const handleLocationChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e?.target;
  //   let newValue: number | boolean | string = value;
  //   if (name === "minToDrive") newValue = Number(value);
  //   else if (name === "anywhere") {
  //     if (value === "true") newValue = true;
  //     else if (value === "false") newValue = false;
  //   }

  //   setFiltersLocation({ ...filtersLocation, [name]: newValue });
  // };
  // const { search_query } = useAppSelector(store => store.project);
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
      <Filter
        allTags={autocompletes.titles}
        applied={search_query?.titles || []}
        label="Job Titles"
        name="titles"
      />
      <FilterLocation />
      <Filter
        allTags={autocompletes.keywords}
        applied={search_query?.keywords || []}
        label="Skills & Keywords
        To Look For"
        name="keywords"
      />
      <Filter
        allTags={autocompletes.keywords}
        applied={search_query?.negative_keywords || []}
        label="Keywords to Avoid"
        name="negative_keywords"
      />
      <Filter
        allTags={autocompletes.specialities}
        applied={
          search_query
            ? [...search_query.industries, ...search_query.specialities]
            : []
        }
        label="Company Specialities"
        name="specialities"
      />
      <FilterCompanySizes />
      <Filter
        allTags={autocompletes.companies}
        applied={search_query?.companies || []}
        label="Companies to Include"
        name="companies"
      />
      <Filter
        allTags={autocompletes.companies}
        applied={search_query?.companies_to_avoid || []}
        label="Companies to Avoid"
        name="companies_to_avoid"
      />
      <FilterEducation />
      <FilterFromTo />
      {/* <Filter
        data={filter}
        removeTag={removeTag}
        addTag={addTag}
        clearAllTags={clearAllTags}
      /> */}
      {/* {filters.map((filter, i) => (
        <Filter
          data={filter}
          key={i}
          removeTag={removeTag}
          addTag={addTag}
          clearAllTags={clearAllTags}
        />
      ))} */}
      {/* {filtersRange.map((filter, i) => (
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
      ))} */}
    </div>
  );
};

export default Filters;
