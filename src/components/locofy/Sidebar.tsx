import { FunctionComponent } from "react";
import { Button } from "@mui/material";

const Sidebar: FunctionComponent = () => {
  return (
    <div
      style={{
        margin: "0",
        position: "absolute",
        top: "6.5rem",
        left: "0rem",
        backgroundColor: "#f5f5f5",
        borderRight: "1px solid #ededed",
        boxSizing: "border-box",
        width: "19rem",
        height: "57.5rem",
        display: "flex",
        flexDirection: "column",
        padding: "2.75rem 0rem 0rem",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1.5rem",
        zIndex: "2",
        textAlign: "left",
        fontSize: "1.25rem",
        color: "#191919",
        fontFamily: "'Noto Sans'",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          padding: "0rem 1rem 0rem 1.75rem",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <h3
          style={{
            margin: "0",
            flex: "1",
            position: "relative",
            fontSize: "inherit",
            fontWeight: "600",
            fontFamily: "inherit",
          }}
        >
          Total saved
        </h3>
        <h3
          style={{
            margin: "0",
            flex: "1",
            position: "relative",
            fontSize: "1rem",
            fontWeight: "400",
            fontFamily: "inherit",
            color: "#1f2937",
            textAlign: "right",
          }}
        >
          80
        </h3>
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
        <Button style={{ alignSelf: "stretch" }} variant="text" color="primary">
          Good leads
        </Button>
        <Button style={{ alignSelf: "stretch" }} variant="text" color="primary">
          Not Sure leads
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
