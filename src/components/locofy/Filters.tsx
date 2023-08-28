import { FunctionComponent } from "react";
import { Button, Icon, IconButton } from "@mui/material";
import AppliedFilter from "./AppliedFilter";
import FrameComponent2 from "./FrameComponent2";
import ContainerFilter from "./ContainerFilter";
import Underline from "./Underline";
import FrameComponent12 from "./FrameComponent12";
import ChexboxInput from "./ChexboxInput";

const Filters: FunctionComponent = () => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        flex: "1",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1.5rem",
        textAlign: "left",
        fontSize: "0.88rem",
        color: "#191919",
        fontFamily: "'Noto Sans'",
      }}
    >
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
            Job Titles
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
            color: "#0a66c2",
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
            <AppliedFilter topic="Product Manager" />
            <AppliedFilter topic="Clean Code " />
            <AppliedFilter topic="Clean Code " />
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
              display: "none",
            }}
          >
            +Engineering Manager
          </div>
        </div>
        <div
          style={{
            display: "none",
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
            <div style={{ position: "relative", fontWeight: "600" }}>
              Current
            </div>
            <div style={{ position: "relative", fontWeight: "600" }}>or</div>
            <div style={{ position: "relative", fontWeight: "600" }}>Past</div>
          </div>
          <img
            style={{
              position: "relative",
              width: "1.25rem",
              height: "1.25rem",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src="/icons15.svg"
          />
        </div>
      </div>
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
            Skills and Keywords
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
                src="/icons16.svg"
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
                src="/icons16.svg"
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
                src="/icons16.svg"
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
                src="/icons16.svg"
              />
            </div>
            <AppliedFilter topic="Javascript" />
            <AppliedFilter topic="Python" />
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
                src="/icons16.svg"
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
                src="/icons16.svg"
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
                src="/icons16.svg"
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
                src="/icons16.svg"
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
                src="/icons16.svg"
              />
            </div>
            <AppliedFilter topic="Authentication" />
            <FrameComponent2 />
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
            <div style={{ position: "relative", fontWeight: "600" }}>
              Current
            </div>
            <div style={{ position: "relative", fontWeight: "600" }}>or</div>
            <div style={{ position: "relative", fontWeight: "600" }}>Past</div>
          </div>
          <IconButton style={{ position: "relative" }} color="primary" />
        </div>
      </div>
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
            Keywords To Avoid
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
            <AppliedFilter topic="PHP" />
            <AppliedFilter topic="Branding" />
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
            +Project Manager
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
            <div style={{ position: "relative", fontWeight: "600" }}>
              Current
            </div>
            <div style={{ position: "relative", fontWeight: "600" }}>or</div>
            <div style={{ position: "relative", fontWeight: "600" }}>Past</div>
          </div>
          <IconButton style={{ position: "relative" }} color="primary" />
        </div>
      </div>
      <ContainerFilter />
      <ContainerFilter />
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
          textAlign: "center",
          color: "#b2b2b2",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            textAlign: "left",
            fontSize: "1rem",
            color: "#191919",
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
            Company sizes
          </h4>
          <Button variant="text" color="primary">
            Clear
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.5rem",
          }}
        >
          <div style={{ position: "relative" }}>From</div>
          <div
            style={{
              borderRadius: "4px",
              border: "0.7px solid #64748b",
              boxSizing: "border-box",
              width: "3.21rem",
              display: "flex",
              flexDirection: "row",
              padding: "0rem 0.25rem",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "0.38rem",
              textAlign: "left",
              color: "#334155",
              fontFamily: "Roboto",
            }}
          >
            <div
              style={{ flex: "1", position: "relative", lineHeight: "1.25rem" }}
            >
              50
            </div>
            <div
              style={{
                width: "0.38rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  position: "relative",
                  width: "0.75rem",
                  height: "0.75rem",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
                alt=""
                src="/icons19.svg"
              />
              <img
                style={{
                  position: "relative",
                  width: "0.75rem",
                  height: "0.75rem",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
                alt=""
                src="/icons20.svg"
              />
            </div>
          </div>
          <div style={{ position: "relative" }}>to</div>
          <div
            style={{
              borderRadius: "4px",
              border: "0.7px solid #cbd5e1",
              boxSizing: "border-box",
              width: "3.21rem",
              display: "flex",
              flexDirection: "row",
              padding: "0rem 0.25rem",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "0.38rem",
              textAlign: "left",
              color: "#334155",
              fontFamily: "Roboto",
            }}
          >
            <div
              style={{ flex: "1", position: "relative", lineHeight: "1.25rem" }}
            >
              300
            </div>
            <div
              style={{
                width: "0.38rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                opacity: "0",
              }}
            >
              <img
                style={{
                  position: "relative",
                  width: "0.75rem",
                  height: "0.75rem",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
                alt=""
                src="/vector-34.svg"
              />
              <img
                style={{
                  position: "relative",
                  width: "0.75rem",
                  height: "0.75rem",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
                alt=""
                src="/vector-34.svg"
              />
            </div>
          </div>
          <div style={{ position: "relative" }}>{`employees `}</div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            fontFamily: "'Public Sans'",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              position: "relative",
              height: "2rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "calc(50% - 2px)",
                right: "0rem",
                left: "0rem",
                borderRadius: "12px",
                backgroundColor: "#0a66c2",
                height: "0.25rem",
                opacity: "0.38",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "calc(50% - 3px)",
                left: "3.31rem",
                borderRadius: "12px",
                backgroundColor: "#0a66c2",
                width: "6.63rem",
                height: "0.38rem",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "calc(50% - 1px)",
                right: "0rem",
                left: "0rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "2px",
                  width: "0.13rem",
                  height: "0.13rem",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0rem",
                    borderRadius: "2px",
                    backgroundColor: "#0a66c2",
                    width: "0.13rem",
                    height: "0.13rem",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0rem",
                    borderRadius: "2px",
                    backgroundColor: "#0a66c2",
                    width: "0.13rem",
                    height: "0.13rem",
                    opacity: "0.8",
                  }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "2px",
                  width: "0.13rem",
                  height: "0.13rem",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0rem",
                    borderRadius: "2px",
                    backgroundColor: "#4b5563",
                    width: "0.13rem",
                    height: "0.13rem",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0rem",
                    borderRadius: "2px",
                    backgroundColor: "#0a66c2",
                    width: "0.13rem",
                    height: "0.13rem",
                    opacity: "0.8",
                  }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "2px",
                  width: "0.13rem",
                  height: "0.13rem",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0rem",
                    borderRadius: "2px",
                    backgroundColor: "#0a66c2",
                    width: "0.13rem",
                    height: "0.13rem",
                    opacity: "0",
                  }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "2px",
                  backgroundColor: "#0a66c2",
                  width: "0.13rem",
                  height: "0.13rem",
                  opacity: "0",
                }}
              />
              <div
                style={{
                  position: "relative",
                  borderRadius: "2px",
                  backgroundColor: "#0a66c2",
                  width: "0.13rem",
                  height: "0.13rem",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0rem",
                    borderRadius: "2px",
                    backgroundColor: "#0a66c2",
                    width: "0.13rem",
                    height: "0.13rem",
                  }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "2px",
                  backgroundColor: "#0a66c2",
                  width: "0.13rem",
                  height: "0.13rem",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0rem",
                    borderRadius: "2px",
                    backgroundColor: "#0a66c2",
                    width: "0.13rem",
                    height: "0.13rem",
                  }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "2px",
                  backgroundColor: "#0a66c2",
                  width: "0.13rem",
                  height: "0.13rem",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0rem",
                    borderRadius: "2px",
                    backgroundColor: "#0a66c2",
                    width: "0.13rem",
                    height: "0.13rem",
                  }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "2px",
                  backgroundColor: "#0a66c2",
                  width: "0.13rem",
                  height: "0.13rem",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0rem",
                    borderRadius: "2px",
                    backgroundColor: "#0a66c2",
                    width: "0.13rem",
                    height: "0.13rem",
                  }}
                />
              </div>
            </div>
            <img
              style={{
                position: "absolute",
                top: "calc(50% - 11px)",
                left: "9.13rem",
                borderRadius: "20px",
                width: "1.63rem",
                height: "1.63rem",
              }}
              alt=""
              src="/slider-thumb.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "calc(50% - 11px)",
                left: "2.44rem",
                borderRadius: "20px",
                width: "1.63rem",
                height: "1.63rem",
              }}
              alt=""
              src="/slider-thumb.svg"
            />
          </div>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                borderRadius: "6px",
                height: "0.81rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  letterSpacing: "0.15px",
                  lineHeight: "1.31rem",
                }}
              >
                Less than 1
              </div>
            </div>
            <div
              style={{
                borderRadius: "6px",
                height: "0.81rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#666",
              }}
            >
              <div
                style={{
                  position: "relative",
                  letterSpacing: "0.15px",
                  lineHeight: "1.31rem",
                }}
              >
                1500
              </div>
            </div>
          </div>
        </div>
      </div>
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
            Companies to Include
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
            color: "#334155",
            fontFamily: "Roboto",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "0.34rem",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    flex: "1",
                    position: "relative",
                    lineHeight: "1.25rem",
                  }}
                >{`Def | `}</div>
                <img
                  style={{
                    position: "relative",
                    width: "1.5rem",
                    height: "1.5rem",
                    overflow: "hidden",
                    flexShrink: "0",
                    display: "none",
                  }}
                  alt=""
                  src="/icons21.svg"
                />
              </div>
              <Underline
                imageDimensions="/underline1.svg"
                underlineIconWidth="unset"
                underlineIconHeight="0.06rem"
                underlineIconAlignSelf="stretch"
                underlineIconMaxWidth="100%"
                underlineIconOverflow="hidden"
                underlineIconFlexShrink="0"
              />
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "0.25rem",
              color: "#0a66c2",
              fontFamily: "'Noto Sans'",
            }}
          >
            <div style={{ alignSelf: "stretch", position: "relative" }}>
              Developer
            </div>
            <div
              style={{ alignSelf: "stretch", position: "relative" }}
            >{`Soft Developer `}</div>
            <div style={{ alignSelf: "stretch", position: "relative" }}>
              Developer
            </div>
            <div style={{ alignSelf: "stretch", position: "relative" }}>
              Developer
            </div>
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
              style={{
                position: "relative",
                fontWeight: "600",
                display: "none",
              }}
            >
              Current
            </div>
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "none",
              }}
            >
              or
            </div>
            <div style={{ position: "relative", fontWeight: "600" }}>Past</div>
          </div>
          <img
            style={{
              position: "relative",
              width: "1.25rem",
              height: "1.25rem",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src="/icons22.svg"
          />
        </div>
      </div>
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
            Companies to Avoid
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
                src="/icons23.svg"
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
                src="/icons23.svg"
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
                src="/icons23.svg"
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
                src="/icons23.svg"
              />
            </div>
            <FrameComponent12
              softwareEngineer="Computer Security"
              icons="/icons23.svg"
            />
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
                src="/icons23.svg"
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
                src="/icons23.svg"
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
                src="/icons23.svg"
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
                src="/icons23.svg"
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
                src="/icons23.svg"
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
                src="/icons23.svg"
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
                src="/icons23.svg"
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
                src="/icons23.svg"
              />
            </div>
            <img
              style={{
                position: "relative",
                width: "1.25rem",
                height: "1.25rem",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/icons24.svg"
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
            +Authentication
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
              style={{
                position: "relative",
                fontWeight: "600",
                display: "none",
              }}
            >
              Current
            </div>
            <div
              style={{
                position: "relative",
                fontWeight: "600",
                display: "none",
              }}
            >
              or
            </div>
            <div style={{ position: "relative", fontWeight: "600" }}>Past</div>
          </div>
          <IconButton style={{ position: "relative" }} color="primary" />
        </div>
      </div>
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
            Education
          </h4>
          <Button variant="text" color="primary">
            Clear
          </Button>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.75rem",
            color: "#334155",
            fontFamily: "Roboto",
          }}
        >
          <div
            style={{
              borderRadius: "4px",
              border: "0.7px solid #b2b2b2",
              boxSizing: "border-box",
              width: "3.21rem",
              height: "1.71rem",
              display: "flex",
              flexDirection: "row",
              padding: "0rem 0.25rem",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "0.38rem",
            }}
          >
            <div
              style={{ flex: "1", position: "relative", lineHeight: "1.25rem" }}
            >
              60
            </div>
            <img
              style={{
                position: "relative",
                width: "0.75rem",
                height: "0.75rem",
                overflow: "hidden",
                flexShrink: "0",
              }}
              alt=""
              src="/icons25.svg"
            />
          </div>
          <div
            style={{
              position: "relative",
              fontFamily: "'Noto Sans'",
              color: "#b2b2b2",
              textAlign: "center",
            }}
          >
            min. drive to
          </div>
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "row",
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
              }}
            >
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "0.19rem",
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        flex: "1",
                        position: "relative",
                        lineHeight: "1.25rem",
                      }}
                    >
                      Tel-Aviv
                    </div>
                    <img
                      style={{
                        position: "relative",
                        width: "1.5rem",
                        height: "1.5rem",
                        overflow: "hidden",
                        flexShrink: "0",
                        display: "none",
                      }}
                      alt=""
                      src="/icons26.svg"
                    />
                  </div>
                  <Underline
                    imageDimensions="/underline2.svg"
                    underlineIconWidth="unset"
                    underlineIconHeight="0.06rem"
                    underlineIconAlignSelf="stretch"
                    underlineIconMaxWidth="100%"
                    underlineIconOverflow="hidden"
                    underlineIconFlexShrink="0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <ChexboxInput />
        </div>
      </div>
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
          textAlign: "center",
          color: "#b2b2b2",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            textAlign: "left",
            fontSize: "1rem",
            color: "#191919",
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
            Years of experience
          </h4>
          <Button variant="text" color="primary">
            Clear
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.5rem",
          }}
        >
          <div style={{ position: "relative" }}>From</div>
          <div
            style={{
              borderRadius: "4px",
              border: "0.7px solid #64748b",
              boxSizing: "border-box",
              width: "3.21rem",
              display: "flex",
              flexDirection: "row",
              padding: "0rem 0.25rem",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "0.38rem",
              textAlign: "left",
              color: "#334155",
              fontFamily: "Roboto",
            }}
          >
            <div
              style={{ flex: "1", position: "relative", lineHeight: "1.25rem" }}
            >
              3
            </div>
            <div
              style={{
                width: "0.38rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{
                  position: "relative",
                  width: "0.75rem",
                  height: "0.75rem",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
                alt=""
                src="/icons27.svg"
              />
              <img
                style={{
                  position: "relative",
                  width: "0.75rem",
                  height: "0.75rem",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
                alt=""
                src="/icons28.svg"
              />
            </div>
          </div>
          <div style={{ position: "relative" }}>to</div>
          <div
            style={{
              borderRadius: "4px",
              border: "0.7px solid #cbd5e1",
              boxSizing: "border-box",
              width: "3.21rem",
              display: "flex",
              flexDirection: "row",
              padding: "0rem 0.25rem",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "0.38rem",
              textAlign: "left",
              color: "#334155",
              fontFamily: "Roboto",
            }}
          >
            <div
              style={{ flex: "1", position: "relative", lineHeight: "1.25rem" }}
            >
              10
            </div>
            <div
              style={{
                width: "0.38rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                opacity: "0",
              }}
            >
              <img
                style={{
                  position: "relative",
                  width: "0.75rem",
                  height: "0.75rem",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
                alt=""
                src="/vector-34.svg"
              />
              <img
                style={{
                  position: "relative",
                  width: "0.75rem",
                  height: "0.75rem",
                  overflow: "hidden",
                  flexShrink: "0",
                }}
                alt=""
                src="/vector-34.svg"
              />
            </div>
          </div>
          <div style={{ position: "relative" }}>Years</div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            fontFamily: "'Public Sans'",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              position: "relative",
              height: "2rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "calc(50% - 2px)",
                right: "0rem",
                left: "0rem",
                borderRadius: "12px",
                backgroundColor: "#0a66c2",
                height: "0.25rem",
                opacity: "0.38",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "calc(50% - 3px)",
                left: "3.31rem",
                borderRadius: "12px",
                backgroundColor: "#0a66c2",
                width: "6.63rem",
                height: "0.38rem",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "calc(50% - 1px)",
                right: "0rem",
                left: "0rem",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "2px",
                  width: "0.13rem",
                  height: "0.13rem",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0rem",
                    borderRadius: "2px",
                    backgroundColor: "#0a66c2",
                    width: "0.13rem",
                    height: "0.13rem",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0rem",
                    borderRadius: "2px",
                    backgroundColor: "#0a66c2",
                    width: "0.13rem",
                    height: "0.13rem",
                    opacity: "0.8",
                  }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "2px",
                  width: "0.13rem",
                  height: "0.13rem",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0rem",
                    borderRadius: "2px",
                    backgroundColor: "#4b5563",
                    width: "0.13rem",
                    height: "0.13rem",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0rem",
                    borderRadius: "2px",
                    backgroundColor: "#0a66c2",
                    width: "0.13rem",
                    height: "0.13rem",
                    opacity: "0.8",
                  }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "2px",
                  width: "0.13rem",
                  height: "0.13rem",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0rem",
                    borderRadius: "2px",
                    backgroundColor: "#0a66c2",
                    width: "0.13rem",
                    height: "0.13rem",
                    opacity: "0",
                  }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "2px",
                  backgroundColor: "#0a66c2",
                  width: "0.13rem",
                  height: "0.13rem",
                  opacity: "0",
                }}
              />
              <div
                style={{
                  position: "relative",
                  borderRadius: "2px",
                  backgroundColor: "#0a66c2",
                  width: "0.13rem",
                  height: "0.13rem",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0rem",
                    borderRadius: "2px",
                    backgroundColor: "#0a66c2",
                    width: "0.13rem",
                    height: "0.13rem",
                  }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "2px",
                  backgroundColor: "#0a66c2",
                  width: "0.13rem",
                  height: "0.13rem",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0rem",
                    borderRadius: "2px",
                    backgroundColor: "#0a66c2",
                    width: "0.13rem",
                    height: "0.13rem",
                  }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "2px",
                  backgroundColor: "#0a66c2",
                  width: "0.13rem",
                  height: "0.13rem",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0rem",
                    borderRadius: "2px",
                    backgroundColor: "#0a66c2",
                    width: "0.13rem",
                    height: "0.13rem",
                  }}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "2px",
                  backgroundColor: "#0a66c2",
                  width: "0.13rem",
                  height: "0.13rem",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0rem",
                    left: "0rem",
                    borderRadius: "2px",
                    backgroundColor: "#0a66c2",
                    width: "0.13rem",
                    height: "0.13rem",
                  }}
                />
              </div>
            </div>
            <img
              style={{
                position: "absolute",
                top: "calc(50% - 7px)",
                left: "9.5rem",
                borderRadius: "20px",
                width: "0.88rem",
                height: "0.88rem",
              }}
              alt=""
              src="/slider-thumb1.svg"
            />
            <img
              style={{
                position: "absolute",
                top: "calc(50% - 7px)",
                left: "2.81rem",
                borderRadius: "20px",
                width: "0.88rem",
                height: "0.88rem",
              }}
              alt=""
              src="/slider-thumb1.svg"
            />
          </div>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                borderRadius: "6px",
                height: "0.81rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  letterSpacing: "0.15px",
                  lineHeight: "1.31rem",
                }}
              >
                Less than 1
              </div>
            </div>
            <div
              style={{
                borderRadius: "6px",
                height: "0.81rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#666",
              }}
            >
              <div
                style={{
                  position: "relative",
                  letterSpacing: "0.15px",
                  lineHeight: "1.31rem",
                }}
              >
                20
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
