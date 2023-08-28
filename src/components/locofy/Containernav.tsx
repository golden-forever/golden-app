import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import Property1default from "./Property1default1";

const Containernav: FunctionComponent = () => {
  return (
    <nav
      style={{
        margin: "0",
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: "0",
      }}
    >
      <header
        style={{
          alignSelf: "stretch",
          backgroundColor: "#0a66c2",
          display: "flex",
          flexDirection: "row",
          padding: "0.5rem 1.5rem",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          textAlign: "left",
          fontSize: "1.25rem",
          color: "#ededed",
          fontFamily: "'Noto Sans'",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "1.5rem",
          }}
        >
          <a
            style={{
              textDecoration: "none",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "0.5rem",
              color: "inherit",
            }}
          >
            <img
              style={{
                position: "relative",
                width: "2.75rem",
                height: "2.75rem",
                objectFit: "cover",
              }}
              alt=""
              src="/image2@2x.png"
            />
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "none",
              }}
            >
              Golden
            </div>
          </a>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "0.25rem",
              fontSize: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "0.38rem",
              }}
            >
              <div style={{ position: "relative" }}>
                Product Team Lead for Technify
              </div>

              <img
                style={{
                  position: "relative",
                  width: "1.5rem",
                  height: "1.5rem",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
                alt=""
                src="/arrowdown1.svg"
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "0.5rem",
              fontSize: "0.75rem",
            }}
          >
            <img
              style={{
                position: "relative",
                borderRadius: "100px",
                width: "2rem",
                height: "2rem",
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
              <h3
                style={{
                  margin: "0",
                  position: "relative",
                  fontSize: "inherit",
                  fontWeight: "600",
                  fontFamily: "inherit",
                }}
              >
                Alma Lawson
              </h3>
              <p
                style={{
                  margin: "0",
                  position: "relative",
                  fontSize: "0.63rem",
                  opacity: "0.8",
                }}
              >
                alma.lawson@example.com
              </p>
            </div>
          </div>
        </div>
      </header>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          padding: "0rem 1.5rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            flex: "1",
            position: "relative",
            maxWidth: "100%",
            overflow: "hidden",
            height: "0.13rem",
            opacity: "0.5",
          }}
          alt=""
          src="/divider.svg"
        />
      </div>
      <div
        style={{
          alignSelf: "stretch",
          backgroundColor: "#0a66c2",
          display: "flex",
          flexDirection: "row",
          padding: "0rem 1.06rem",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Property1default
          property1defaultPosition="unset"
          property1defaultHeight="unset"
          property1defaultDisplay="unset"
          property1defaultFlexDirection="unset"
          property1defaultAlignItems="unset"
          property1defaultJustifyContent="unset"
          property1defaultGap="unset"
          property1defaultOpacity="unset"
        />
        <Property1default
          property1defaultPosition="unset"
          property1defaultHeight="unset"
          property1defaultDisplay="unset"
          property1defaultFlexDirection="unset"
          property1defaultAlignItems="unset"
          property1defaultJustifyContent="unset"
          property1defaultGap="unset"
          property1defaultOpacity="0.3"
        />
        <Property1default
          property1defaultPosition="unset"
          property1defaultHeight="unset"
          property1defaultDisplay="unset"
          property1defaultFlexDirection="unset"
          property1defaultAlignItems="unset"
          property1defaultJustifyContent="unset"
          property1defaultGap="unset"
          property1defaultOpacity="0.3"
        />
      </div>
    </nav>
  );
};

export default Containernav;
