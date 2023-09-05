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

// Autocompletes
import titles from "../../assets/autocompletes/titles.json";
import companies from "../../assets/autocompletes/companies_name_only.json";
import cities from "../../assets/autocompletes/cities.json";
import specialities from "../../assets/autocompletes/specialities.json";
import industries from "../../assets/autocompletes/industries.json";

type Autocomplete = {
  titles: string[];
  companies: string[];
  keywords: string[];
  cities: string[];
  specialities: string[];
};
const initialFilters: Autocomplete = {
  titles,
  companies,
  cities,
  // company_sizes,
  keywords: skillsAndKeywords,

  specialities: [...specialities, ...industries],
};
type Props = {};

const Filters = ({}: Props) => {
  const [activeTagInput, setActiveTagInput] = useState("");
  const [autocompletes, setAutocompletes] =
    useState<Autocomplete>(initialFilters);

  const dispatch = useAppDispatch();
  const { search_query } = useAppSelector(store => store.project);
  const { isMobileSidebar } = useAppSelector(state => state.user);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const handleActiveTagInput = (input_id: string) => {
    setActiveTagInput(input_id);
  };
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
        p={"0 20px 0 24px"}
        variant="h5"
      >
        Filters
      </Typography>
      <Collapse
        in={isDesktop || isMobileSidebar}
        sx={{ width: "100%", maxWidth: "375px" }}
      >
        <Box
          height={"100%"}
          padding={{ xs: "0 16px", lg: "0 20px 0 24px" }}
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          rowGap={"20px"}
        >
          <Filter
            allTags={autocompletes.titles}
            applied={search_query?.titles || []}
            activeTagInput={activeTagInput}
            handleActiveTagInput={handleActiveTagInput}
            label="Job Titles"
            name="titles"
          />
          <FilterLocation cities={autocompletes.cities} />
          <Filter
            allTags={autocompletes.keywords}
            applied={search_query?.keywords || []}
            activeTagInput={activeTagInput}
            handleActiveTagInput={handleActiveTagInput}
            label="Skills & Keywords
        To Look For"
            name="keywords"
          />
          <Filter
            allTags={autocompletes.keywords}
            applied={search_query?.negative_keywords || []}
            activeTagInput={activeTagInput}
            handleActiveTagInput={handleActiveTagInput}
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
            activeTagInput={activeTagInput}
            handleActiveTagInput={handleActiveTagInput}
            label="Company Specialities"
            name="specialities"
          />
          <FilterCompanySizes applied={search_query?.company_sizes || []} />
          <Filter
            allTags={autocompletes.companies}
            applied={search_query?.companies || []}
            activeTagInput={activeTagInput}
            handleActiveTagInput={handleActiveTagInput}
            label="Companies to Include"
            name="companies"
          />
          <Filter
            allTags={autocompletes.companies}
            applied={search_query?.companies_to_avoid || []}
            activeTagInput={activeTagInput}
            handleActiveTagInput={handleActiveTagInput}
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
