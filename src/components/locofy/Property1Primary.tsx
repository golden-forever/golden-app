import { FunctionComponent, useMemo, type CSSProperties } from "react";

type Property1PrimaryType = {
  /** Style props */
  property1PrimaryPosition?: CSSProperties["position"];
  property1PrimaryBorderRadius?: CSSProperties["borderRadius"];
  property1PrimaryBackgroundColor?: CSSProperties["backgroundColor"];
  property1PrimaryWidth?: CSSProperties["width"];
  property1PrimaryDisplay?: CSSProperties["display"];
  property1PrimaryFlexDirection?: CSSProperties["flexDirection"];
  property1PrimaryPadding?: CSSProperties["padding"];
  property1PrimaryBoxSizing?: CSSProperties["boxSizing"];
  property1PrimaryAlignItems?: CSSProperties["alignItems"];
  property1PrimaryJustifyContent?: CSSProperties["justifyContent"];
  property1PrimaryGap?: CSSProperties["gap"];
  property1PrimaryOpacity?: CSSProperties["opacity"];
  property1PrimaryCursor?: CSSProperties["cursor"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const Property1Primary: FunctionComponent<Property1PrimaryType> = ({
  property1PrimaryPosition,
  property1PrimaryBorderRadius,
  property1PrimaryBackgroundColor,
  property1PrimaryWidth,
  property1PrimaryDisplay,
  property1PrimaryFlexDirection,
  property1PrimaryPadding,
  property1PrimaryBoxSizing,
  property1PrimaryAlignItems,
  property1PrimaryJustifyContent,
  property1PrimaryGap,
  property1PrimaryOpacity,
  property1PrimaryCursor,
}) => {
  const property1PrimaryStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("position", property1PrimaryPosition),
      ...getStyleValue("borderRadius", property1PrimaryBorderRadius),
      ...getStyleValue("backgroundColor", property1PrimaryBackgroundColor),
      ...getStyleValue("width", property1PrimaryWidth),
      ...getStyleValue("display", property1PrimaryDisplay),
      ...getStyleValue("flexDirection", property1PrimaryFlexDirection),
      ...getStyleValue("padding", property1PrimaryPadding),
      ...getStyleValue("boxSizing", property1PrimaryBoxSizing),
      ...getStyleValue("alignItems", property1PrimaryAlignItems),
      ...getStyleValue("justifyContent", property1PrimaryJustifyContent),
      ...getStyleValue("gap", property1PrimaryGap),
      ...getStyleValue("opacity", property1PrimaryOpacity),
      ...getStyleValue("cursor", property1PrimaryCursor),
    };
  }, [
    property1PrimaryPosition,
    property1PrimaryBorderRadius,
    property1PrimaryBackgroundColor,
    property1PrimaryWidth,
    property1PrimaryDisplay,
    property1PrimaryFlexDirection,
    property1PrimaryPadding,
    property1PrimaryBoxSizing,
    property1PrimaryAlignItems,
    property1PrimaryJustifyContent,
    property1PrimaryGap,
    property1PrimaryOpacity,
    property1PrimaryCursor,
  ]);

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "4px",
        backgroundColor: "#0a66c2",
        width: "300px",
        display: "flex",
        flexDirection: "row",
        padding: "12px 10px",
        boxSizing: "border-box",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        textAlign: "left",
        fontSize: "16px",
        color: "#fff",
        fontFamily: "'Noto Sans'",
        ...property1PrimaryStyle,
      }}
    >
      <div
        style={{
          display: "none",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            position: "relative",
            width: "24px",
            height: "24px",
            overflow: "hidden",
            flexShrink: "0",
          }}
          alt=""
          src="/icons5.svg"
        />
      </div>
      <div style={{ position: "relative", fontWeight: "600" }}>Sign Up</div>
      <div
        style={{
          display: "none",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            position: "relative",
            width: "24px",
            height: "24px",
            overflow: "hidden",
            flexShrink: "0",
          }}
          alt=""
          src="/icons5.svg"
        />
      </div>
    </div>
  );
};

export default Property1Primary;
