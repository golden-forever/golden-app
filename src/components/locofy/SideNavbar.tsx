import { FunctionComponent } from "react";
import { Button } from "@mui/material";

const SideNavbar: FunctionComponent = () => {
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
          padding: "0rem 0rem 0rem 1.75rem",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.5rem",
          }}
        >
          <img
            style={{
              borderRadius: "2px",
              width: "2rem",
              height: "2rem",
              objectFit: "cover",
            }}
            alt=""
            src="/icon5@2x.png"
          />
          <div style={{ flex: "1", position: "relative", fontWeight: "600" }}>
            Techify
          </div>
        </div>
      </div>
      <img
        style={{ position: "relative", width: "17rem", height: "0.06rem" }}
        alt=""
        src="/divider4.svg"
      />
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "1rem",
          fontSize: "1rem",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            padding: "0rem 0rem 0rem 1.75rem",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div style={{ flex: "1", position: "relative", fontWeight: "600" }}>
            Open positions
          </div>
          <div
            style={{
              position: "relative",
              fontSize: "0.88rem",
              textDecoration: "underline",
              letterSpacing: "0.03em",
              lineHeight: "140%",
              fontWeight: "500",
              fontFamily: "Roboto",
              color: "#374151",
              display: "none",
            }}
          >
            Clear all
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "0.38rem",
          }}
        >
          <Button
            style={{ alignSelf: "stretch" }}
            variant="text"
            color="primary"
          >
            Product Team Lead
          </Button>
          <Button
            style={{ alignSelf: "stretch" }}
            variant="text"
            color="primary"
          >{`QA Engineer `}</Button>
          <Button
            style={{ alignSelf: "stretch" }}
            variant="text"
            color="primary"
          >
            CFU
          </Button>
        </div>
      </div>
      <img
        style={{ position: "relative", width: "17rem", height: "0.06rem" }}
        alt=""
        src="/divider4.svg"
      />
      <Button style={{ alignSelf: "stretch" }} variant="text" color="primary">
        Create a new job
      </Button>
    </div>
  );
};

export default SideNavbar;
