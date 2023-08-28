import { FunctionComponent } from "react";
import Filters from "./Filters";

const Sidebar1: FunctionComponent = () => {
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
          flex: "1",
          display: "flex",
          flexDirection: "column",
          padding: "0rem 1rem 0rem 1.5rem",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "1.5rem",
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
          Filters
        </h2>
        <Filters />
      </div>
    </div>
  );
};

export default Sidebar1;
