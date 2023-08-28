import { FunctionComponent, useMemo, type CSSProperties } from "react";

type FrameComponentType = {
  /** Style props */
  frameDivPosition?: CSSProperties["position"];
  frameDivBackgroundColor?: CSSProperties["backgroundColor"];
  frameDivWidth?: CSSProperties["width"];
  frameDivDisplay?: CSSProperties["display"];
  frameDivFlexDirection?: CSSProperties["flexDirection"];
  frameDivPadding?: CSSProperties["padding"];
  frameDivBoxSizing?: CSSProperties["boxSizing"];
  frameDivAlignItems?: CSSProperties["alignItems"];
  frameDivJustifyContent?: CSSProperties["justifyContent"];
  frameDivGap?: CSSProperties["gap"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const FrameComponent: FunctionComponent<FrameComponentType> = ({
  frameDivPosition,
  frameDivBackgroundColor,
  frameDivWidth,
  frameDivDisplay,
  frameDivFlexDirection,
  frameDivPadding,
  frameDivBoxSizing,
  frameDivAlignItems,
  frameDivJustifyContent,
  frameDivGap,
}) => {
  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("position", frameDivPosition),
      ...getStyleValue("backgroundColor", frameDivBackgroundColor),
      ...getStyleValue("width", frameDivWidth),
      ...getStyleValue("display", frameDivDisplay),
      ...getStyleValue("flexDirection", frameDivFlexDirection),
      ...getStyleValue("padding", frameDivPadding),
      ...getStyleValue("boxSizing", frameDivBoxSizing),
      ...getStyleValue("alignItems", frameDivAlignItems),
      ...getStyleValue("justifyContent", frameDivJustifyContent),
      ...getStyleValue("gap", frameDivGap),
    };
  }, [
    frameDivPosition,
    frameDivBackgroundColor,
    frameDivWidth,
    frameDivDisplay,
    frameDivFlexDirection,
    frameDivPadding,
    frameDivBoxSizing,
    frameDivAlignItems,
    frameDivJustifyContent,
    frameDivGap,
  ]);

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#f9f9f9",
        width: "259px",
        display: "flex",
        flexDirection: "row",
        padding: "12px 16px",
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "12px",
        textAlign: "left",
        fontSize: "14px",
        color: "#191919",
        fontFamily: "'Noto Sans'",
        ...frameDiv4Style,
      }}
    >
      <img
        style={{
          position: "relative",
          width: "20px",
          height: "20px",
          overflow: "hidden",
          flexShrink: "0",
        }}
        alt=""
        src="/icons1.svg"
      />
      <div style={{ flex: "1", position: "relative" }}>Send an invite</div>
      <img
        style={{
          position: "relative",
          width: "16px",
          height: "16px",
          overflow: "hidden",
          flexShrink: "0",
        }}
        alt=""
        src="/icons2.svg"
      />
    </div>
  );
};

export default FrameComponent;
