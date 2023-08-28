import { FunctionComponent, useMemo, type CSSProperties } from "react";

type Property1Default1Type = {
  dimensionCode?: string;

  /** Style props */
  property1DefaultPosition?: CSSProperties["position"];
  checkBoxOutlineBlankIconOverflow?: CSSProperties["overflow"];
  checkBoxOutlineBlankIconFlexShrink?: CSSProperties["flexShrink"];
  checkBoxOutlineBlankIconWidth?: CSSProperties["width"];
  checkBoxOutlineBlankIconHeight?: CSSProperties["height"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const Property1Default1: FunctionComponent<Property1Default1Type> = ({
  dimensionCode,
  property1DefaultPosition,
  checkBoxOutlineBlankIconOverflow,
  checkBoxOutlineBlankIconFlexShrink,
  checkBoxOutlineBlankIconWidth,
  checkBoxOutlineBlankIconHeight,
}) => {
  const property1DefaultStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("position", property1DefaultPosition),
    };
  }, [property1DefaultPosition]);

  const checkBoxOutlineBlankIconStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("overflow", checkBoxOutlineBlankIconOverflow),
      ...getStyleValue("flexShrink", checkBoxOutlineBlankIconFlexShrink),
      ...getStyleValue("width", checkBoxOutlineBlankIconWidth),
      ...getStyleValue("height", checkBoxOutlineBlankIconHeight),
    };
  }, [
    checkBoxOutlineBlankIconOverflow,
    checkBoxOutlineBlankIconFlexShrink,
    checkBoxOutlineBlankIconWidth,
    checkBoxOutlineBlankIconHeight,
  ]);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        ...property1DefaultStyle,
      }}
    >
      <img
        alt=""
        src={dimensionCode}
        style={{
          position: "relative",
          width: "20px",
          height: "20px",
          overflow: "hidden",
          flexShrink: "0",
          ...checkBoxOutlineBlankIconStyle,
        }}
      />
    </div>
  );
};

export default Property1Default1;
