import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";

const ActionsContainer: FunctionComponent = () => {
  const onDanielChoenSavedClick = useCallback(() => {
    // Please sync "Pipeline(My candidates)" to the project
  }, []);

  const onDanielChoenSaved1Click = useCallback(() => {
    // Please sync "Pipeline(My candidates)" to the project
  }, []);

  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        padding: "1.5rem 0rem 0rem",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1.5rem",
        textAlign: "left",
        fontSize: "0.88rem",
        color: "#666",
        fontFamily: "'Noto Sans'",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          backgroundColor: "#fff",
          borderBottom: "1px solid #ededed",
          display: "flex",
          flexDirection: "row",
          padding: "0rem 1.5rem 1.5rem",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <img
          style={{
            position: "relative",
            width: "1.25rem",
            height: "1.25rem",
            overflow: "hidden",
            flexShrink: "0",
          }}
          alt=""
          src="/icons11.svg"
        />
        <div
          style={{
            alignSelf: "stretch",
            flex: "1",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              position: "relative",
              fontWeight: "600",
              cursor: "pointer",
            }}
            onClick={onDanielChoenSavedClick}
          >
            <span>{`Yoss Maman was saved to `}</span>
            <span style={{ color: "#0a66c2" }}>Pipeline</span>
          </div>
          <Button variant="text" color="primary">
            Cancel
          </Button>
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          backgroundColor: "#fff",
          borderBottom: "1px solid #ededed",
          display: "flex",
          flexDirection: "row",
          padding: "0rem 1.5rem 1.5rem",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <img
          style={{
            position: "relative",
            width: "1.25rem",
            height: "1.25rem",
            overflow: "hidden",
            flexShrink: "0",
          }}
          alt=""
          src="/icons11.svg"
        />
        <div
          style={{
            alignSelf: "stretch",
            flex: "1",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              position: "relative",
              fontWeight: "600",
              cursor: "pointer",
            }}
            onClick={onDanielChoenSaved1Click}
          >
            <span>{`Vadim Pilipenko was saved to `}</span>
            <span style={{ color: "#0a66c2" }}>Pipeline</span>
          </div>
          <Button variant="text" color="primary">
            Cancel
          </Button>
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          backgroundColor: "#fff",
          borderBottom: "1px solid #ededed",
          display: "flex",
          flexDirection: "row",
          padding: "0rem 1.5rem 1.5rem",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <img
          style={{
            position: "relative",
            width: "1.5rem",
            height: "1.5rem",
            overflow: "hidden",
            flexShrink: "0",
          }}
          alt=""
          src="/icons12.svg"
        />
        <div
          style={{
            alignSelf: "stretch",
            flex: "1",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ position: "relative", fontWeight: "600" }}>
            Avi Ventura doesn't fit to your project
          </div>
          <Button variant="text" color="primary">
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ActionsContainer;
