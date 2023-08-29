import { FunctionComponent, useState } from "react";
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
type Props = {
  data: Filter;
  removeTag: RemoveTag;
  addTag: AddTag;
  clearAllTags: ClearAllTags;
};
const Filter = ({ data, removeTag, addTag, clearAllTags }: Props) => {
  const [isAddNew, setIsAddNew] = useState(false);
  const { label, applied, include, allTags } = data;
  const [availableTags, setAvailableTags] = useState<never[] | Tag[]>(allTags);

  const handleAdd = (tag: Tag) => {
    setIsAddNew(false);
    addTag(data, tag);
    const newTags = allTags.filter(item => !applied.includes(item));
    setAvailableTags(newTags);
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
        <Button
          variant="text"
          color="primary"
          onClick={() => clearAllTags(data)}
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
          {applied.map((val, i) => (
            <Box
              key={i}
              sx={{
                borderRadius: "100px",
                backgroundColor: "#caedff",
                display: "flex",
                flexDirection: "row",
                padding: "0.25rem 0.5rem 0.25rem 0.63rem",
                textTransform: "capitalize",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.13rem",
                textAlign: "left",
                fontSize: "0.88rem",
                color: "#191919",
                fontFamily: "'Noto Sans'",
              }}
            >
              {val.label}
              <IconButton sx={{ p: "0" }} onClick={() => removeTag(data, i)}>
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
      {include && <Include addTag={addTag} availableTags={availableTags} />}
      {/* Include End*/}
    </div>
  );
};

export default Filter;
