import { FunctionComponent } from "react";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div
      style={{
        borderRadius: "100px",
        backgroundColor: "#caedff",
        display: "flex",
        flexDirection: "row",
        padding: "0.25rem 0.5rem 0.25rem 0.63rem",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.13rem",
        textAlign: "left",
        fontSize: "0.88rem",
        color: "#191919",
        fontFamily: "'Noto Sans'",
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
        src="/icons16.svg"
      />
    </div>
  );
};

export default FrameComponent2;
