import { FunctionComponent } from "react";
import Property1Default1 from "./Property1Default";

const ChexboxInput: FunctionComponent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "0.5rem",
        textAlign: "left",
        fontSize: "0.88rem",
        color: "#191919",
        fontFamily: "'Noto Sans'",
      }}
    >
      <Property1Default1
        dimensionCode="/checkboxoutlineblank1.svg"
        property1DefaultPosition="unset"
        checkBoxOutlineBlankIconOverflow="hidden"
        checkBoxOutlineBlankIconFlexShrink="0"
        checkBoxOutlineBlankIconWidth="1.25rem"
        checkBoxOutlineBlankIconHeight="1.25rem"
      />
      <div style={{ position: "relative" }}>Anywhere in Israel</div>
    </div>
  );
};

export default ChexboxInput;
