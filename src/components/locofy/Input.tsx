import { FunctionComponent, useMemo, type CSSProperties } from "react";

type InputType = {
  content?: string;
  descriptionText?: string;

  /** Style props */
  inputPosition?: CSSProperties["position"];
  inputWidth?: CSSProperties["width"];
  inputAlignSelf?: CSSProperties["alignSelf"];
  inputHeight?: CSSProperties["height"];
  inputZIndex?: CSSProperties["zIndex"];
  inputDisplay?: CSSProperties["display"];
  inputFlexDirection?: CSSProperties["flexDirection"];
  inputAlignItems?: CSSProperties["alignItems"];
  inputJustifyContent?: CSSProperties["justifyContent"];
  inputGap?: CSSProperties["gap"];
  frameDivHeight?: CSSProperties["height"];
  frameDivGap?: CSSProperties["gap"];
  labelCursor?: CSSProperties["cursor"];
  labelGap?: CSSProperties["gap"];
  labelFontSize?: CSSProperties["fontSize"];
  labelLineHeight?: CSSProperties["lineHeight"];
  labelFontFamily?: CSSProperties["fontFamily"];
  labelLetterSpacing?: CSSProperties["letterSpacing"];
  labelFontSize1?: CSSProperties["fontSize"];
  frameDivPadding?: CSSProperties["padding"];
  iconsWidth?: CSSProperties["width"];
  iconsHeight?: CSSProperties["height"];
  frameDivHeight1?: CSSProperties["height"];
  frameDivDisplay?: CSSProperties["display"];
  frameDivFlexDirection?: CSSProperties["flexDirection"];
  frameDivAlignItems?: CSSProperties["alignItems"];
  frameDivJustifyContent?: CSSProperties["justifyContent"];
  frameDivFlex?: CSSProperties["flex"];
  frameDivBorder?: CSSProperties["border"];
  frameDivBackgroundColor?: CSSProperties["backgroundColor"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const Input: FunctionComponent<InputType> = ({
  content,
  descriptionText,
  inputPosition,
  inputWidth,
  inputAlignSelf,
  inputHeight,
  inputZIndex,
  inputDisplay,
  inputFlexDirection,
  inputAlignItems,
  inputJustifyContent,
  inputGap,
  frameDivHeight,
  frameDivGap,
  labelCursor,
  labelGap,
  labelFontSize,
  labelLineHeight,
  labelFontFamily,
  labelLetterSpacing,
  labelFontSize1,
  frameDivPadding,
  iconsWidth,
  iconsHeight,
  frameDivHeight1,
  frameDivDisplay,
  frameDivFlexDirection,
  frameDivAlignItems,
  frameDivJustifyContent,
  frameDivFlex,
  frameDivBorder,
  frameDivBackgroundColor,
}) => {
  const inputStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("position", inputPosition),
      ...getStyleValue("width", inputWidth),
      ...getStyleValue("alignSelf", inputAlignSelf),
      ...getStyleValue("height", inputHeight),
      ...getStyleValue("zIndex", inputZIndex),
      ...getStyleValue("display", inputDisplay),
      ...getStyleValue("flexDirection", inputFlexDirection),
      ...getStyleValue("alignItems", inputAlignItems),
      ...getStyleValue("justifyContent", inputJustifyContent),
      ...getStyleValue("gap", inputGap),
    };
  }, [
    inputPosition,
    inputWidth,
    inputAlignSelf,
    inputHeight,
    inputZIndex,
    inputDisplay,
    inputFlexDirection,
    inputAlignItems,
    inputJustifyContent,
    inputGap,
  ]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("height", frameDivHeight),
      ...getStyleValue("gap", frameDivGap),
    };
  }, [frameDivHeight, frameDivGap]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("cursor", labelCursor),
      ...getStyleValue("gap", labelGap),
    };
  }, [labelCursor, labelGap]);

  const label1Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("fontSize", labelFontSize),
    };
  }, [labelFontSize]);

  const label2Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("lineHeight", labelLineHeight),
      ...getStyleValue("fontFamily", labelFontFamily),
      ...getStyleValue("letterSpacing", labelLetterSpacing),
      ...getStyleValue("fontSize", labelFontSize1),
    };
  }, [labelLineHeight, labelFontFamily, labelLetterSpacing, labelFontSize1]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("padding", frameDivPadding),
    };
  }, [frameDivPadding]);

  const iconsStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("width", iconsWidth),
      ...getStyleValue("height", iconsHeight),
    };
  }, [iconsWidth, iconsHeight]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("height", frameDivHeight1),
      ...getStyleValue("display", frameDivDisplay),
      ...getStyleValue("flexDirection", frameDivFlexDirection),
      ...getStyleValue("alignItems", frameDivAlignItems),
      ...getStyleValue("justifyContent", frameDivJustifyContent),
      ...getStyleValue("flex", frameDivFlex),
      ...getStyleValue("border", frameDivBorder),
      ...getStyleValue("backgroundColor", frameDivBackgroundColor),
    };
  }, [
    frameDivHeight1,
    frameDivDisplay,
    frameDivFlexDirection,
    frameDivAlignItems,
    frameDivJustifyContent,
    frameDivFlex,
    frameDivBorder,
    frameDivBackgroundColor,
  ]);

  return (
    <div
      style={{
        position: "relative",
        width: "334px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "4px",
        textAlign: "left",
        fontSize: "14px",
        color: "#666",
        fontFamily: "'Noto Sans'",
        ...inputStyle,
      }}
    >
      <div
        style={{
          height: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "4px",
          ...frameDivStyle,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "2px",
            ...labelStyle,
          }}
        >
          <div style={{ position: "relative", ...label1Style }}>{content}</div>
          <div
            style={{
              position: "relative",
              lineHeight: "13px",
              fontWeight: "500",
              fontFamily: "Inter",
              color: "#1f2937",
              display: "none",
              ...label2Style,
            }}
          >
            *
          </div>
        </div>
        <div
          style={{
            borderRadius: "4px",
            backgroundColor: "#f3f4f6",
            display: "none",
            flexDirection: "row",
            padding: "2px",
            alignItems: "center",
            justifyContent: "center",
            ...frameDiv1Style,
          }}
        >
          <img
            alt=""
            src={descriptionText}
            style={{
              position: "relative",
              width: "6px",
              height: "6px",
              overflow: "hidden",
              flexShrink: "0",
              ...iconsStyle,
            }}
          />
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          height: "48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          color: "#b2b2b2",
          ...frameDiv2Style,
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            borderRadius: "4px",
            backgroundColor: "#fff",
            border: "1px solid #b2b2b2",
            boxSizing: "border-box",
            height: "48px",
            overflow: "hidden",
            flexShrink: "0",
            display: "flex",
            flexDirection: "row",
            padding: "12px",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "8px",
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
            src="/icons7.svg"
          />
          <div
            style={{
              flex: "1",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div style={{ flex: "1", position: "relative" }}>Enter email</div>
          </div>
          <img
            style={{
              position: "relative",
              width: "24px",
              height: "24px",
              overflow: "hidden",
              flexShrink: "0",
            }}
            alt=""
            src="/icons7.svg"
          />
        </div>
        <div
          style={{
            position: "relative",
            fontSize: "10px",
            letterSpacing: "0.01em",
            lineHeight: "24px",
            fontWeight: "500",
            fontFamily: "Manrope",
            color: "#6b7280",
            display: "none",
          }}
        >
          *At least 12 characters including upper and lower case as well as
          special characters
        </div>
      </div>
    </div>
  );
};

export default Input;
