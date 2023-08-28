import { FunctionComponent, useMemo, type CSSProperties } from "react";
import { TextField } from "@mui/material";

type InputContainerType = {
  jobDescriptionInput?: string;
  jobDescriptionPlaceholder?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
  propFlex?: CSSProperties["flex"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const InputContainer: FunctionComponent<InputContainerType> = ({
  jobDescriptionInput,
  jobDescriptionPlaceholder,
  propHeight,
  propFlex,
}) => {
  const input1Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
    };
  }, [propHeight]);

  const inputmuioutlinedStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("flex", propFlex),
    };
  }, [propFlex]);

  return (
    <div
      style={{
        alignSelf: "stretch",
        height: "14.19rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "0.25rem",
        textAlign: "left",
        fontSize: "0.88rem",
        color: "#666",
        fontFamily: "'Noto Sans'",
        ...input1Style,
      }}
    >
      <div
        style={{
          height: "1.25rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "0.25rem",
        }}
      >
        <label
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "0.13rem",
          }}
        >
          <div style={{ position: "relative" }}>{jobDescriptionInput}</div>
          <div
            style={{
              position: "relative",
              lineHeight: "0.81rem",
              fontWeight: "500",
              fontFamily: "Inter",
              color: "#1f2937",
              display: "none",
            }}
          >
            *
          </div>
        </label>
        <div
          style={{
            borderRadius: "4px",
            backgroundColor: "#f3f4f6",
            display: "none",
            flexDirection: "row",
            padding: "0.13rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              position: "relative",
              width: "0.38rem",
              height: "0.38rem",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src="/icons6.svg"
          />
        </div>
      </div>
      <TextField
        variant="outlined"
        label={jobDescriptionPlaceholder}
        style={{
          border: "none",
          backgroundColor: "transparent",
          alignSelf: "stretch",
          flex: "1",
          ...inputmuioutlinedStyle,
        }}
      />
    </div>
  );
};

export default InputContainer;
