import { FunctionComponent, useMemo, type CSSProperties } from "react";

type FrameComponent1Type = {
  /** Style props */
  frameDivPosition?: CSSProperties["position"];
  frameDivBackgroundColor?: CSSProperties["backgroundColor"];
  frameDivBorderTop?: CSSProperties["borderTop"];
  frameDivBoxSizing?: CSSProperties["boxSizing"];
  frameDivWidth?: CSSProperties["width"];
  frameDivDisplay?: CSSProperties["display"];
  frameDivFlexDirection?: CSSProperties["flexDirection"];
  frameDivPadding?: CSSProperties["padding"];
  frameDivAlignItems?: CSSProperties["alignItems"];
  frameDivJustifyContent?: CSSProperties["justifyContent"];
  frameDivGap?: CSSProperties["gap"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  frameDivPosition,
  frameDivBackgroundColor,
  frameDivBorderTop,
  frameDivBoxSizing,
  frameDivWidth,
  frameDivDisplay,
  frameDivFlexDirection,
  frameDivPadding,
  frameDivAlignItems,
  frameDivJustifyContent,
  frameDivGap,
}) => {
  const frameDiv5Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("position", frameDivPosition),
      ...getStyleValue("backgroundColor", frameDivBackgroundColor),
      ...getStyleValue("borderTop", frameDivBorderTop),
      ...getStyleValue("boxSizing", frameDivBoxSizing),
      ...getStyleValue("width", frameDivWidth),
      ...getStyleValue("display", frameDivDisplay),
      ...getStyleValue("flexDirection", frameDivFlexDirection),
      ...getStyleValue("padding", frameDivPadding),
      ...getStyleValue("alignItems", frameDivAlignItems),
      ...getStyleValue("justifyContent", frameDivJustifyContent),
      ...getStyleValue("gap", frameDivGap),
    };
  }, [
    frameDivPosition,
    frameDivBackgroundColor,
    frameDivBorderTop,
    frameDivBoxSizing,
    frameDivWidth,
    frameDivDisplay,
    frameDivFlexDirection,
    frameDivPadding,
    frameDivAlignItems,
    frameDivJustifyContent,
    frameDivGap,
  ]);

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#fff",
        borderTop: "1px solid #ededed",
        boxSizing: "border-box",
        width: "259px",
        display: "flex",
        flexDirection: "row",
        padding: "12px 16px",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "12px",
        textAlign: "left",
        fontSize: "14px",
        color: "#191919",
        fontFamily: "'Noto Sans'",
        ...frameDiv5Style,
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
        src="/icons.svg"
      />
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "4px",
        }}
      >
        <div
          style={{
            position: "relative",
            fontWeight: "600",
            display: "inline-block",
            width: "135px",
          }}
        >
          Call support
        </div>
        <div
          style={{ alignSelf: "stretch", position: "relative", color: "#666" }}
        >
          051-222-878-05
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
