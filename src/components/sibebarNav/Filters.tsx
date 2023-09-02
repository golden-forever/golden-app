import { FunctionComponent, useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  TextField,
  FormGroup,
} from "@mui/material";

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
  cities: string[];
  specialities: string[];
};
const initialFilters: Autocomplete = {
  titles: [],
  companies: [],
  cities: [],
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
        const citiesRes = await getRequest(URLcities);
        const industriesRes = await getRequest(URLindustries);
        const titles = titlesRes.data;
        const companies = companiesRes.data;
        const specialities = specialitiesRes.data;
        const industries = industriesRes.data;
        const cities = citiesRes.data;

        setAutocompletes(prev => ({
          ...prev,
          titles,
          companies,
          cities,

          specialities: [...specialities, ...industries],
        }));
      } catch (error) {
        console.log(error);
      }
    };
    asyncWrapper();
  }, []);
  const { search_query } = useAppSelector(store => store.project);

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
      <FilterLocation cities={autocompletes.cities} />
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
      <FilterCompanySizes applied={search_query?.company_sizes || []} />
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
      <FilterEducation applied={search_query?.is_top_schools_only || false} />
      <FilterFromTo
        min_years_of_experience_title={
          search_query?.min_years_of_experience_title || 1
        }
        max_years_of_experience_title={
          search_query?.max_years_of_experience_title || 1
        }
      />
    </div>
  );
};

export default Filters;
