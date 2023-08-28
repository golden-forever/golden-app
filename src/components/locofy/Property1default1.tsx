import { FunctionComponent, useMemo, type CSSProperties } from "react";

type Property1defaultType = {
  /** Style props */
  property1defaultPosition?: CSSProperties["position"];
  property1defaultHeight?: CSSProperties["height"];
  property1defaultDisplay?: CSSProperties["display"];
  property1defaultFlexDirection?: CSSProperties["flexDirection"];
  property1defaultAlignItems?: CSSProperties["alignItems"];
  property1defaultJustifyContent?: CSSProperties["justifyContent"];
  property1defaultGap?: CSSProperties["gap"];
  property1defaultOpacity?: CSSProperties["opacity"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const Property1default: FunctionComponent<Property1defaultType> = ({
  property1defaultPosition,
  property1defaultHeight,
  property1defaultDisplay,
  property1defaultFlexDirection,
  property1defaultAlignItems,
  property1defaultJustifyContent,
  property1defaultGap,
  property1defaultOpacity,
}) => {
  const property1defaultStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("position", property1defaultPosition),
      ...getStyleValue("height", property1defaultHeight),
      ...getStyleValue("display", property1defaultDisplay),
      ...getStyleValue("flexDirection", property1defaultFlexDirection),
      ...getStyleValue("alignItems", property1defaultAlignItems),
      ...getStyleValue("justifyContent", property1defaultJustifyContent),
      ...getStyleValue("gap", property1defaultGap),
      ...getStyleValue("opacity", property1defaultOpacity),
    };
  }, [
    property1defaultPosition,
    property1defaultHeight,
    property1defaultDisplay,
    property1defaultFlexDirection,
    property1defaultAlignItems,
    property1defaultJustifyContent,
    property1defaultGap,
    property1defaultOpacity,
  ]);

  return (
    <div
      style={{
        position: "relative",
        height: "32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "12px",
        textAlign: "left",
        fontSize: "14px",
        color: "#ededed",
        fontFamily: "'Noto Sans'",
        ...property1defaultStyle,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <div style={{ position: "relative", fontWeight: "600" }}>
          Search Results
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          position: "relative",
          borderTop: "2px solid #ededed",
          boxSizing: "border-box",
          height: "0px",
          opacity: "0",
        }}
      />
    </div>
  );
};

export default Property1default;
