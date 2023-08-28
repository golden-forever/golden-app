import { FunctionComponent, useMemo, type CSSProperties } from "react";

type EducationType = {
  educationDetails?: string;
  universityName?: string;
  degreeDetails?: string;
  dateRange?: string;
  showLogosIcon?: boolean;

  /** Style props */
  educationPosition?: CSSProperties["position"];
  educationWidth?: CSSProperties["width"];
  educationGap?: CSSProperties["gap"];
  educationAlignSelf?: CSSProperties["alignSelf"];
  iconWidth?: CSSProperties["width"];
  iconHeight?: CSSProperties["height"];
  iconPadding?: CSSProperties["padding"];
  iconBackgroundImage?: CSSProperties["backgroundImage"];
  iconBackgroundSize?: CSSProperties["backgroundSize"];
  iconBackgroundRepeat?: CSSProperties["backgroundRepeat"];
  iconBackgroundPosition?: CSSProperties["backgroundPosition"];
  logosIconWidth?: CSSProperties["width"];
  logosIconHeight?: CSSProperties["height"];
  rightSideGap?: CSSProperties["gap"];
  cornelUniversityFontSize?: CSSProperties["fontSize"];
  cornelUniversityAlignSelf?: CSSProperties["alignSelf"];
  frameDivGap?: CSSProperties["gap"];
  masterOfRegionalFontSize?: CSSProperties["fontSize"];
  masterOfRegionalDisplay?: CSSProperties["display"];
  masterOfRegionalAlignItems?: CSSProperties["alignItems"];
  masterOfRegionalWidth?: CSSProperties["width"];
  masterOfRegionalAlignSelf?: CSSProperties["alignSelf"];
  divFontSize?: CSSProperties["fontSize"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const Education: FunctionComponent<EducationType> = ({
  educationDetails,
  universityName,
  degreeDetails,
  dateRange,
  showLogosIcon,
  educationPosition,
  educationWidth,
  educationGap,
  educationAlignSelf,
  iconWidth,
  iconHeight,
  iconPadding,
  iconBackgroundImage,
  iconBackgroundSize,
  iconBackgroundRepeat,
  iconBackgroundPosition,
  logosIconWidth,
  logosIconHeight,
  rightSideGap,
  cornelUniversityFontSize,
  cornelUniversityAlignSelf,
  frameDivGap,
  masterOfRegionalFontSize,
  masterOfRegionalDisplay,
  masterOfRegionalAlignItems,
  masterOfRegionalWidth,
  masterOfRegionalAlignSelf,
  divFontSize,
}) => {
  const educationStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("position", educationPosition),
      ...getStyleValue("width", educationWidth),
      ...getStyleValue("gap", educationGap),
      ...getStyleValue("alignSelf", educationAlignSelf),
    };
  }, [educationPosition, educationWidth, educationGap, educationAlignSelf]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("width", iconWidth),
      ...getStyleValue("height", iconHeight),
      ...getStyleValue("padding", iconPadding),
      ...getStyleValue("backgroundImage", iconBackgroundImage),
      ...getStyleValue("backgroundSize", iconBackgroundSize),
      ...getStyleValue("backgroundRepeat", iconBackgroundRepeat),
      ...getStyleValue("backgroundPosition", iconBackgroundPosition),
    };
  }, [
    iconWidth,
    iconHeight,
    iconPadding,
    iconBackgroundImage,
    iconBackgroundSize,
    iconBackgroundRepeat,
    iconBackgroundPosition,
  ]);

  const logosIconStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("width", logosIconWidth),
      ...getStyleValue("height", logosIconHeight),
    };
  }, [logosIconWidth, logosIconHeight]);

  const rightSideStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("gap", rightSideGap),
    };
  }, [rightSideGap]);

  const cornelUniversityStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("fontSize", cornelUniversityFontSize),
      ...getStyleValue("alignSelf", cornelUniversityAlignSelf),
    };
  }, [cornelUniversityFontSize, cornelUniversityAlignSelf]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("gap", frameDivGap),
    };
  }, [frameDivGap]);

  const masterOfRegionalStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("fontSize", masterOfRegionalFontSize),
      ...getStyleValue("display", masterOfRegionalDisplay),
      ...getStyleValue("alignItems", masterOfRegionalAlignItems),
      ...getStyleValue("width", masterOfRegionalWidth),
      ...getStyleValue("alignSelf", masterOfRegionalAlignSelf),
    };
  }, [
    masterOfRegionalFontSize,
    masterOfRegionalDisplay,
    masterOfRegionalAlignItems,
    masterOfRegionalWidth,
    masterOfRegionalAlignSelf,
  ]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("fontSize", divFontSize),
    };
  }, [divFontSize]);

  return (
    <div
      style={{
        position: "relative",
        width: "316px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "16px",
        textAlign: "left",
        fontSize: "16px",
        color: "#191919",
        fontFamily: "'Noto Sans'",
        ...educationStyle,
      }}
    >
      <div
        style={{
          borderRadius: "2px",
          width: "48px",
          height: "48px",
          display: "flex",
          flexDirection: "row",
          padding: "10px",
          boxSizing: "border-box",
          alignItems: "center",
          justifyContent: "center",
          ...iconStyle,
        }}
      >
        {showLogosIcon && (
          <img
            alt=""
            src={educationDetails}
            style={{
              position: "relative",
              width: "32px",
              height: "31.44px",
              ...logosIconStyle,
            }}
          />
        )}
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "8px",
          ...rightSideStyle,
        }}
      >
        <div
          style={{
            position: "relative",
            fontWeight: "600",
            ...cornelUniversityStyle,
          }}
        >
          {universityName}
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "4px",
            fontSize: "14px",
            ...frameDiv3Style,
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              width: "256px",
              ...masterOfRegionalStyle,
            }}
          >
            {degreeDetails}
          </div>
          <div style={{ position: "relative", color: "#666", ...divStyle }}>
            {dateRange}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
