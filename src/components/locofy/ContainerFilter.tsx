import { FunctionComponent } from "react";
import { Button, Icon, IconButton } from "@mui/material";
import AppliedFilter from "./AppliedFilter";

const ContainerFilter: FunctionComponent = () => {
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
        textAlign: "left",
        fontSize: "0.88rem",
        color: "#191919",
        fontFamily: "'Noto Sans'",
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
          Company Industries
        </h4>
        <Button variant="text" color="primary">
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
          <div
            style={{
              borderRadius: "100px",
              backgroundColor: "#caedff",
              display: "none",
              flexDirection: "row",
              padding: "0.25rem 0.5rem 0.25rem 0.63rem",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.13rem",
            }}
          >
            <div style={{ position: "relative" }}>Product Manager</div>
            <img
              style={{
                position: "relative",
                width: "0.88rem",
                height: "0.88rem",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/icons17.svg"
            />
          </div>
          <div
            style={{
              borderRadius: "100px",
              backgroundColor: "#caedff",
              display: "none",
              flexDirection: "row",
              padding: "0.25rem 0.5rem 0.25rem 0.63rem",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.13rem",
            }}
          >
            <div style={{ position: "relative" }}>{`Clean Code `}</div>
            <img
              style={{
                position: "relative",
                width: "0.88rem",
                height: "0.88rem",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/icons17.svg"
            />
          </div>
          <div
            style={{
              borderRadius: "100px",
              backgroundColor: "#caedff",
              display: "none",
              flexDirection: "row",
              padding: "0.25rem 0.5rem 0.25rem 0.63rem",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.13rem",
            }}
          >
            <div style={{ position: "relative" }}>{`Clean Code `}</div>
            <img
              style={{
                position: "relative",
                width: "0.88rem",
                height: "0.88rem",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/icons17.svg"
            />
          </div>
          <div
            style={{
              borderRadius: "100px",
              backgroundColor: "#caedff",
              display: "none",
              flexDirection: "row",
              padding: "0.25rem 0.5rem 0.25rem 0.63rem",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.13rem",
            }}
          >
            <div style={{ position: "relative" }}>{`Clean Code `}</div>
            <img
              style={{
                position: "relative",
                width: "0.88rem",
                height: "0.88rem",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/icons17.svg"
            />
          </div>
          <AppliedFilter topic="Software Development" />
          <div
            style={{
              borderRadius: "100px",
              backgroundColor: "#caedff",
              display: "none",
              flexDirection: "row",
              padding: "0.25rem 0.5rem 0.25rem 0.63rem",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.13rem",
            }}
          >
            <div style={{ position: "relative" }}>Branding</div>
            <img
              style={{
                position: "relative",
                width: "0.88rem",
                height: "0.88rem",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/icons17.svg"
            />
          </div>
          <div
            style={{
              borderRadius: "100px",
              backgroundColor: "#caedff",
              display: "none",
              flexDirection: "row",
              padding: "0.25rem 0.5rem 0.25rem 0.63rem",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.13rem",
            }}
          >
            <div style={{ position: "relative" }}>{`Clean Code `}</div>
            <img
              style={{
                position: "relative",
                width: "0.88rem",
                height: "0.88rem",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/icons17.svg"
            />
          </div>
          <div
            style={{
              borderRadius: "100px",
              backgroundColor: "#caedff",
              display: "none",
              flexDirection: "row",
              padding: "0.25rem 0.5rem 0.25rem 0.63rem",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.13rem",
            }}
          >
            <div style={{ position: "relative" }}>{`Clean Code `}</div>
            <img
              style={{
                position: "relative",
                width: "0.88rem",
                height: "0.88rem",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/icons17.svg"
            />
          </div>
          <div
            style={{
              borderRadius: "100px",
              backgroundColor: "#caedff",
              display: "none",
              flexDirection: "row",
              padding: "0.25rem 0.5rem 0.25rem 0.63rem",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.13rem",
            }}
          >
            <div style={{ position: "relative" }}>{`Clean Code `}</div>
            <img
              style={{
                position: "relative",
                width: "0.88rem",
                height: "0.88rem",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/icons17.svg"
            />
          </div>
          <div
            style={{
              borderRadius: "100px",
              backgroundColor: "#caedff",
              display: "none",
              flexDirection: "row",
              padding: "0.25rem 0.5rem 0.25rem 0.63rem",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.13rem",
            }}
          >
            <div style={{ position: "relative" }}>{`Clean Code `}</div>
            <img
              style={{
                position: "relative",
                width: "0.88rem",
                height: "0.88rem",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/icons17.svg"
            />
          </div>
          <div
            style={{
              borderRadius: "100px",
              backgroundColor: "#caedff",
              display: "none",
              flexDirection: "row",
              padding: "0.25rem 0.5rem 0.25rem 0.63rem",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.13rem",
            }}
          >
            <div style={{ position: "relative" }}>{`Clean Code `}</div>
            <img
              style={{
                position: "relative",
                width: "0.88rem",
                height: "0.88rem",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/icons17.svg"
            />
          </div>
          <div
            style={{
              borderRadius: "100px",
              backgroundColor: "#caedff",
              display: "none",
              flexDirection: "row",
              padding: "0.25rem 0.5rem 0.25rem 0.63rem",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.13rem",
            }}
          >
            <div style={{ position: "relative" }}>Authentication</div>
            <img
              style={{
                position: "relative",
                width: "0.88rem",
                height: "0.88rem",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/icons17.svg"
            />
          </div>
          <div
            style={{
              borderRadius: "100px",
              backgroundColor: "#caedff",
              display: "none",
              flexDirection: "row",
              padding: "0.25rem 0.5rem 0.25rem 0.63rem",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.13rem",
            }}
          >
            <div style={{ position: "relative" }}>Cyber Security</div>
            <img
              style={{
                position: "relative",
                width: "0.88rem",
                height: "0.88rem",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/icons17.svg"
            />
          </div>
          <IconButton
            style={{
              position: "relative",
              transform: " rotate(-90deg)",
              transformOrigin: "0 0",
            }}
            color="primary"
          />
        </div>
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            color: "#0a66c2",
            display: "none",
          }}
        >
          +Engineering Manager
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          gap: "0.25rem",
        }}
      >
        <div style={{ position: "relative" }}>Include:</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.25rem",
          }}
        >
          <div
            style={{ position: "relative", fontWeight: "600", display: "none" }}
          >
            Current
          </div>
          <div
            style={{ position: "relative", fontWeight: "600", display: "none" }}
          >
            or
          </div>
          <div style={{ position: "relative", fontWeight: "600" }}>Past</div>
        </div>
        <IconButton style={{ position: "relative" }} color="primary" />
      </div>
    </div>
  );
};

export default ContainerFilter;
