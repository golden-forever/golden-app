import { FunctionComponent, useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  TextField,
  FormGroup,
} from "@mui/material";

// Icons
import { Close, Add, Remove } from "@mui/icons-material";
import Include from "./filters/Include";
import CustomAutocomplete from "./filters/CustomAutocomplete";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setFilters } from "../../features/project/projectSlice";
type Props = {
  allTags: string[];
  applied: string[];
  label: string;
  name: string;
};
const Filter = ({ allTags, applied, label, name }: Props) => {
  const [isAddNew, setIsAddNew] = useState(false);

  const [localApplied, setLocalApplied] = useState(applied);
  const dispatch = useAppDispatch();
  const [availableTags, setAvailableTags] = useState<string[]>(allTags);
  useEffect(() => {
    setAvailableTags(allTags);
  }, [allTags]);
  useEffect(() => {
    setLocalApplied(applied);
  }, [applied]);
  const handleAdd = (tag: string) => {
    setLocalApplied([...localApplied, tag]);
    const tempTags = [...availableTags];
    const tagIndex = tempTags.indexOf(tag);
    tempTags.splice(tagIndex, 1);
    setIsAddNew(false);
    setAvailableTags(tempTags);
    dispatch(setFilters({ name, value: [...localApplied, tag] }));
  };
  const clearAllTags = () => {
    setLocalApplied([]);
  };
  const removeTag = (index: number) => {
    const tempApplied = [...localApplied];
    tempApplied.splice(index, 1);
    setLocalApplied(tempApplied);
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
          {label}
        </h4>
        <Button variant="text" color="primary" onClick={() => clearAllTags()}>
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
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.5rem",
          }}
        >
          {localApplied.map((val, i) => (
            <Box
              key={i}
              sx={{
                borderRadius: "100px",
                backgroundColor: "#caedff",
                display: "flex",
                maxWidth: "100%",
                flexDirection: "row",
                padding: "0.25rem 0.5rem 0.25rem 0.63rem",
                textTransform: "capitalize",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.13rem",
                textAlign: "left",
                fontSize: "0.88rem",
                color: "#191919",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  width: "100%",
                }}
              >
                {val}
              </Box>
              <IconButton sx={{ p: "0" }} onClick={() => removeTag(i)}>
                <Close sx={{ width: "15px", height: "15px" }} />
              </IconButton>
            </Box>
          ))}

          <IconButton
            size="small"
            sx={{ marginLeft: "-5px", p: "1px" }}
            onClick={() => setIsAddNew(!isAddNew)}
          >
            {isAddNew ? <Remove /> : <Add />}
          </IconButton>
        </div>
        {isAddNew && (
          <CustomAutocomplete
            availableTags={availableTags}
            handleSelect={handleAdd}
          />
        )}
      </div>
      {/* Include */}
      {name !== "titles" && <Include />}
      {/* Include End*/}
    </div>
  );
};

export default Filter;
