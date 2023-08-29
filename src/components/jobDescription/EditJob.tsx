import { FunctionComponent } from "react";
import {
  TextField,
  Button,
  InputLabel,
  Box,
  FormControl,
  Input,
  OutlinedInput,
} from "@mui/material";
import Textarea from "../common/inputs/Textarea";
type Props = {
  setSelected: () => void;
};

const EditJob = ({ setSelected }: Props) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "32px",
        textAlign: "center",
        fontSize: "24px",
        color: "#191919",
        fontFamily: "'Noto Sans'",
      }}
    >
      <h2
        style={{
          margin: "0",
          alignSelf: "stretch",
          position: "relative",
          fontSize: "inherit",
          fontWeight: "600",
          fontFamily: "inherit",
        }}
      >
        Product manag
      </h2>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "32px",
          textAlign: "left",
          fontSize: "16px",
          color: "#0a66c2",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            borderTop: "1px solid #ededed",
            borderBottom: "1px solid #ededed",
            display: "flex",
            flexDirection: "column",
            padding: "24px 0px",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "16px",
          }}
        >
          <FormControl fullWidth>
            <InputLabel
              disableAnimation
              htmlFor="component-outlined"
              // sx={{ position: "static" }}
            >
              Name
            </InputLabel>
            <OutlinedInput
              id="component-outlined"
              defaultValue="Composed TextField"
              label="Name"
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel
              disableAnimation
              htmlFor="component-outlined"
              // sx={{ position: "static" }}
            >
              Name
            </InputLabel>
            <OutlinedInput
              id="component-outlined"
              defaultValue="Composed TextField"
              label="Name"
            />
          </FormControl>
          <Textarea rows={16} label="Job Description" />
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#666",
          }}
        >
          <div
            style={{
              display: "none",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.15px",
                lineHeight: "140%",
                fontWeight: "500",
              }}
            >
              Required field
            </div>
            <div
              style={{
                position: "relative",
                letterSpacing: "0.03em",
                lineHeight: "140%",
                fontWeight: "500",
                color: "#1f2937",
                display: "inline-block",
                width: "10px",
                height: "30px",
                flexShrink: "0",
              }}
            >
              *
            </div>
          </div>
          <Button variant="outlined" color="primary" onClick={setSelected}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={setSelected}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditJob;
