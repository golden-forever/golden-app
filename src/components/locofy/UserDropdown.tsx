import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import FrameComponent from "./FrameComponent1";
import FrameComponent1 from "./FrameComponent";

const UserDropdown: FunctionComponent = () => {
  return (
    <div
      style={{
        position: "relative",
        boxShadow:
          "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        textAlign: "left",
        fontSize: "12px",
        color: "#191919",
        fontFamily: "'Noto Sans'",
      }}
    >
      <div
        style={{
          borderRadius: "4px 4px 0px 0px",
          backgroundColor: "#fff",
          width: "259px",
          display: "flex",
          flexDirection: "column",
          padding: "16px",
          boxSizing: "border-box",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          zIndex: "0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "8px",
          }}
        >
          <img
            style={{
              position: "relative",
              borderRadius: "100px",
              width: "32px",
              height: "32px",
              objectFit: "cover",
            }}
            alt=""
            src="/rectangle-116@2x.png"
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div style={{ position: "relative", fontWeight: "600" }}>
              Alma Lawson
            </div>
            <div
              style={{
                position: "relative",
                fontSize: "10px",
                color: "#666",
                opacity: "0.8",
              }}
            >
              alma.lawson@example.com
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          zIndex: "1",
        }}
      >
        <FrameComponent
          frameDivPosition="unset"
          frameDivBackgroundColor="unset"
          frameDivWidth="unset"
          frameDivDisplay="unset"
          frameDivFlexDirection="unset"
          frameDivPadding="unset"
          frameDivBoxSizing="unset"
          frameDivAlignItems="unset"
          frameDivJustifyContent="unset"
          frameDivGap="unset"
        />
        <FrameComponent
          frameDivPosition="unset"
          frameDivBackgroundColor="unset"
          frameDivWidth="unset"
          frameDivDisplay="unset"
          frameDivFlexDirection="unset"
          frameDivPadding="unset"
          frameDivBoxSizing="unset"
          frameDivAlignItems="unset"
          frameDivJustifyContent="unset"
          frameDivGap="unset"
        />
        <FrameComponent
          frameDivPosition="unset"
          frameDivBackgroundColor="unset"
          frameDivWidth="unset"
          frameDivDisplay="unset"
          frameDivFlexDirection="unset"
          frameDivPadding="unset"
          frameDivBoxSizing="unset"
          frameDivAlignItems="unset"
          frameDivJustifyContent="unset"
          frameDivGap="unset"
        />
        <FrameComponent1
          frameDivPosition="unset"
          frameDivBackgroundColor="unset"
          frameDivBorderTop="unset"
          frameDivBoxSizing="unset"
          frameDivWidth="unset"
          frameDivDisplay="unset"
          frameDivFlexDirection="unset"
          frameDivPadding="unset"
          frameDivAlignItems="unset"
          frameDivJustifyContent="unset"
          frameDivGap="unset"
        />
        <FrameComponent1
          frameDivPosition="unset"
          frameDivBackgroundColor="unset"
          frameDivBorderTop="unset"
          frameDivBoxSizing="unset"
          frameDivWidth="unset"
          frameDivDisplay="unset"
          frameDivFlexDirection="unset"
          frameDivPadding="unset"
          frameDivAlignItems="unset"
          frameDivJustifyContent="unset"
          frameDivGap="unset"
        />
      </div>
      <Button
        style={{ zIndex: "2" }}
        sx={{ width: 259 }}
        variant="text"
        color="primary"
      >
        Log out
      </Button>
      <img
        style={{
          position: "absolute",
          margin: "0",
          top: "133px",
          left: "176px",
          width: "21.85px",
          height: "25px",
          zIndex: "3",
        }}
        alt=""
        src="/cursor.svg"
      />
    </div>
  );
};

export default UserDropdown;
