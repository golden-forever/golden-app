import { FunctionComponent, useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useAppDispatch } from "../../../hooks";
import { Add, Remove } from "@mui/icons-material";
import { setFilters } from "../../../features/project/projectSlice";

type CompanySizeObj = {
  size: CompanySize;
  isApplied: boolean;
};
const companySizes: CompanySizeObj[] = [
  { size: "1-10", isApplied: false },
  { size: "11-50", isApplied: false },
  { size: "51-200", isApplied: false },
  { size: "201-500", isApplied: false },
  { size: "501-1,000", isApplied: false },
  { size: "1,001-5,000", isApplied: false },
  { size: "5,001-10,000", isApplied: false },
  { size: "10,000+", isApplied: false },
];
type Props = { applied: string[] };
const FilterCompanySizes = ({ applied }: Props) => {
  const [isAddNew, setIsAddNew] = useState(false);

  const [sizesToShow, setSizesToShow] = useState<CompanySizeObj[]>(
    companySizes.slice(0, 3)
  );
  const [sizesToAdd, setSizesToAdd] = useState<CompanySizeObj[]>(
    companySizes.slice(3)
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    let newToShow = [...sizesToShow];
    let newToAdd = [...sizesToAdd];
    applied.forEach(newOption => {
      const { newSizesToShow, newSizesToAdd } = getNewStates(newToShow, {
        size: newOption as CompanySize,
        isApplied: true,
      });
      newToShow = newSizesToShow;
      newToAdd = newSizesToAdd;
    });
    setSizesToShow(newToShow);
    setSizesToAdd(newToAdd);
  }, [applied]);
  const handleAddSize = (size: CompanySizeObj) => {
    const { newSizesToShow, newSizesToAdd } = getNewStates(sizesToShow, size);
    setSizesToShow(newSizesToShow);
    setSizesToAdd(newSizesToAdd);
    setIsAddNew(false);
  };
  const getNewStates = (curSizes: CompanySizeObj[], size: CompanySizeObj) => {
    const tempSizes = [...curSizes, size];
    const newSizesToShow: CompanySizeObj[] = [];
    const newSizesToAdd: CompanySizeObj[] = [];
    companySizes.forEach(option => {
      const isAdded = tempSizes.find(tempVal => tempVal.size === option.size);
      if (isAdded) newSizesToShow.push(isAdded);
      else newSizesToAdd.push(option);
    });
    return { newSizesToShow, newSizesToAdd };
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    const indexOfSize = sizesToShow.findIndex(option => option.size === name);
    if (indexOfSize < 0) {
      return;
    }
    const newSizes = [...sizesToShow];
    newSizes[indexOfSize] = { size: name as CompanySize, isApplied: checked };
    setSizesToShow(newSizes);
    optimizedDebounce(newSizes);
  };
  const debounce = () => {
    let timeoutID: string | number | NodeJS.Timeout | undefined;
    return (sizes: CompanySizeObj[]) => {
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        const value = sizes.map(option => {
          if (option.isApplied === true) return option.size;
        });
        dispatch(setFilters({ company_sizes: value }));
      }, 1000);
    };
  };
  const optimizedDebounce = useMemo(() => debounce(), []);
  const clearAll = () => {
    setSizesToShow(companySizes.slice(0, 3));
    setSizesToAdd(companySizes.slice(3));
    optimizedDebounce([]);
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
          Company sizes
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
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "0.75rem",
        }}
      >
        {sizesToShow.map((option, i) => (
          <FormControlLabel
            key={i}
            sx={{ "& .MuiTypography-root": { fontSize: "14px" } }}
            control={
              <Checkbox
                name={option.size}
                checked={option.isApplied}
                onChange={handleChange}
              />
            }
            label={option.size}
          />
        ))}
        {sizesToAdd.length > 0 && (
          <IconButton
            size="small"
            sx={{ marginLeft: "-5px", p: "1px" }}
            onClick={() => setIsAddNew(!isAddNew)}
          >
            {isAddNew ? <Remove /> : <Add />}
          </IconButton>
        )}
      </div>
      {isAddNew && (
        <Box
          sx={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "col",
            flexWrap: "wrap",
            alignItems: "start",
            justifyContent: "start",
            gap: "0.5rem",
          }}
        >
          {sizesToAdd.map((option, i) => (
            <Box width={"100%"} key={i}>
              <Typography
                sx={{
                  cursor: "pointer",
                  width: "fit-content",
                  textDecoration: "underline",
                  color: "primary.main",
                  textUnderlineOffset: "4px",
                  ":hover": {
                    color: "primary.dark",
                  },
                }}
                onClick={() => handleAddSize(option)}
                key={i}
              >
                {option.size}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </div>
  );
};

export default FilterCompanySizes;
