import { FunctionComponent, useMemo, type CSSProperties } from "react";

type UnderlineType = {
  imageDimensions?: string;

  /** Style props */
  underlineIconWidth?: CSSProperties["width"];
  underlineIconHeight?: CSSProperties["height"];
  underlineIconAlignSelf?: CSSProperties["alignSelf"];
  underlineIconMaxWidth?: CSSProperties["maxWidth"];
  underlineIconOverflow?: CSSProperties["overflow"];
  underlineIconFlexShrink?: CSSProperties["flexShrink"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const Underline: FunctionComponent<UnderlineType> = ({
  imageDimensions,
  underlineIconWidth,
  underlineIconHeight,
  underlineIconAlignSelf,
  underlineIconMaxWidth,
  underlineIconOverflow,
  underlineIconFlexShrink,
}) => {
  const underlineIconStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("width", underlineIconWidth),
      ...getStyleValue("height", underlineIconHeight),
      ...getStyleValue("alignSelf", underlineIconAlignSelf),
      ...getStyleValue("maxWidth", underlineIconMaxWidth),
      ...getStyleValue("overflow", underlineIconOverflow),
      ...getStyleValue("flexShrink", underlineIconFlexShrink),
    };
  }, [
    underlineIconWidth,
    underlineIconHeight,
    underlineIconAlignSelf,
    underlineIconMaxWidth,
    underlineIconOverflow,
    underlineIconFlexShrink,
  ]);

  return (
    <img
      alt=""
      src={imageDimensions}
      style={{
        position: "relative",
        borderRadius: "10px",
        width: "120px",
        height: "2px",
        ...underlineIconStyle,
      }}
    />
  );
};

export default Underline;
