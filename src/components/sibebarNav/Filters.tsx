import { FunctionComponent, useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  TextField,
  FormGroup,
  Collapse,
} from "@mui/material";

import {
  URLtitles,
  URLcities,
  URLindustries,
  URLspecialities,
  URLcompanies,
} from "../../utils/helpers";
// Icons
import { FilterListOff, FilterList } from "@mui/icons-material";

import Filter from "./Filter";
import FilterFromTo from "./FilterFromTo";
import FilterLocation from "./FilterLocation";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getRequest } from "../../utils/apiHelper";
import { skillsAndKeywords } from "../../_mock/filters";
import FilterCompanySizes from "./filters/FilterCompanySizes";
import FilterEducation from "./filters/FilterEducation";
import { setIsMobileSidebar } from "../../features/user/userSlice";

import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
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
type Props = { toggleMobileSidebar: () => void };

const Filters = ({ toggleMobileSidebar }: Props) => {
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
  const dispatch = useAppDispatch();
  const { search_query } = useAppSelector(store => store.project);
  const { isMobileSidebar } = useAppSelector(state => state.user);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        // gap: "1.5rem",
        textAlign: "left",
        fontSize: "0.88rem",
        color: "#191919",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: { xs: "flex", lg: "none" },
          alignItems: "center",
          justifyContent: "start",
          width: "100%",
          p: { xs: "14px 16px 12px 16px", lg: "0 28px" },
          borderBottom: "1px solid",
          borderColor: "secondary.light",
        }}
      >
        <Button
          onClick={() => {
            dispatch(setIsMobileSidebar(!isMobileSidebar));
          }}
          size="small"
          sx={{
            p: "0",
            color: "secondary.darker",
            fontSize: "16px",
            fontWeight: "500",
            ":hover": { background: "none" },
          }}
        >
          {isMobileSidebar ? (
            <FilterListOff fontSize="medium" sx={{ marginRight: "8px" }} />
          ) : (
            <FilterList fontSize="medium" sx={{ marginRight: "8px" }} />
          )}
          Filters
        </Button>
      </Box>
      <Typography
        sx={{
          color: "black",
          textAlign: "start",
          width: "100%",
          display: { xs: "none", lg: "block" },
        }}
        variant="h5"
      >
        Filters
      </Typography>
      <Collapse in={isDesktop || isMobileSidebar}>
        <Box height={"100%"} padding="0 16px">
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
          <FilterEducation
            applied={search_query?.is_top_schools_only || false}
          />
          <FilterFromTo
            min_years_of_experience_title={
              search_query?.min_years_of_experience_title || 1
            }
            max_years_of_experience_title={
              search_query?.max_years_of_experience_title || 1
            }
          />
        </Box>
      </Collapse>
    </Box>
  );
};

export default Filters;
