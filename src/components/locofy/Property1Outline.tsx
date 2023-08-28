import { FunctionComponent, useMemo, type CSSProperties } from "react";

type Property1OutlineType = {
  /** Style props */
  property1OutlinePosition?: CSSProperties["position"];
  property1OutlineBorderRadius?: CSSProperties["borderRadius"];
  property1OutlineBorder?: CSSProperties["border"];
  property1OutlineBoxSizing?: CSSProperties["boxSizing"];
  property1OutlineWidth?: CSSProperties["width"];
  property1OutlineDisplay?: CSSProperties["display"];
  property1OutlineFlexDirection?: CSSProperties["flexDirection"];
  property1OutlinePadding?: CSSProperties["padding"];
  property1OutlineAlignItems?: CSSProperties["alignItems"];
  property1OutlineJustifyContent?: CSSProperties["justifyContent"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const Property1Outline: FunctionComponent<Property1OutlineType> = ({
  property1OutlinePosition,
  property1OutlineBorderRadius,
  property1OutlineBorder,
  property1OutlineBoxSizing,
  property1OutlineWidth,
  property1OutlineDisplay,
  property1OutlineFlexDirection,
  property1OutlinePadding,
  property1OutlineAlignItems,
  property1OutlineJustifyContent,
}) => {
  const property1OutlineStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("position", property1OutlinePosition),
      ...getStyleValue("borderRadius", property1OutlineBorderRadius),
      ...getStyleValue("border", property1OutlineBorder),
      ...getStyleValue("boxSizing", property1OutlineBoxSizing),
      ...getStyleValue("width", property1OutlineWidth),
      ...getStyleValue("display", property1OutlineDisplay),
      ...getStyleValue("flexDirection", property1OutlineFlexDirection),
      ...getStyleValue("padding", property1OutlinePadding),
      ...getStyleValue("alignItems", property1OutlineAlignItems),
      ...getStyleValue("justifyContent", property1OutlineJustifyContent),
    };
  }, [
    property1OutlinePosition,
    property1OutlineBorderRadius,
    property1OutlineBorder,
    property1OutlineBoxSizing,
    property1OutlineWidth,
    property1OutlineDisplay,
    property1OutlineFlexDirection,
    property1OutlinePadding,
    property1OutlineAlignItems,
    property1OutlineJustifyContent,
  ]);

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "4px",
        border: "1px solid #0a66c2",
        boxSizing: "border-box",
        width: "300px",
        display: "flex",
        flexDirection: "row",
        padding: "12px 10px",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "left",
        fontSize: "16px",
        color: "#0a66c2",
        fontFamily: "'Noto Sans'",
        ...property1OutlineStyle,
      }}
    >
      <div style={{ position: "relative", fontWeight: "600" }}>Sign Up</div>
    </div>
  );
};

export default Property1Outline;
