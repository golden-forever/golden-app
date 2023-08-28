import { FunctionComponent, useMemo, type CSSProperties } from "react";

type ExperienceType = {
  companyDescription?: string;
  companyLogoUrl?: string;
  employeeTenure?: string;
  companyInfoDescription?: string;
  productDimensions?: string;
  productDimensions2?: string;
  jobTitle?: string;
  employmentPeriod?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propBoxSizing?: CSSProperties["boxSizing"];
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const Experience: FunctionComponent<ExperienceType> = ({
  companyDescription,
  companyLogoUrl,
  employeeTenure,
  companyInfoDescription,
  productDimensions,
  productDimensions2,
  jobTitle,
  employmentPeriod,
  propWidth,
  propAlignSelf,
  propBoxSizing,
  propBackgroundImage,
}) => {
  const expirienceStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("alignSelf", propAlignSelf),
    };
  }, [propWidth, propAlignSelf]);

  const icondivStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("boxSizing", propBoxSizing),
    };
  }, [propBoxSizing]);

  const frameDiv6Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("backgroundImage", propBackgroundImage),
    };
  }, [propBackgroundImage]);

  return (
    <div
      style={{
        width: "23.13rem",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        textAlign: "left",
        fontSize: "0.88rem",
        color: "#191919",
        fontFamily: "'Noto Sans'",
        ...expirienceStyle,
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          padding: "0rem 0rem 1.69rem",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "0.25rem",
          ...icondivStyle,
        }}
      >
        <div
          style={{
            borderRadius: "2px",
            width: "3rem",
            height: "3rem",
            display: "flex",
            flexDirection: "row",
            padding: "0.63rem",
            boxSizing: "border-box",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: "url('48x48x1694633798')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            ...frameDiv6Style,
          }}
        >
          <img
            style={{
              position: "relative",
              width: "2rem",
              height: "2.22rem",
              display: "none",
            }}
            alt=""
            src={companyDescription}
          />
        </div>
        <div
          style={{
            flex: "1",
            width: "0.94rem",
            display: "flex",
            flexDirection: "column",
            padding: "0.19rem 0rem 0rem",
            boxSizing: "border-box",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <img
            style={{
              flex: "1",
              position: "relative",
              maxHeight: "100%",
              width: "0.09rem",
            }}
            alt=""
            src="/vector-2.svg"
          />
          <div
            style={{
              width: "0.94rem",
              height: "0.94rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "50%",
                backgroundColor: "#b2b2b2",
                width: "0.5rem",
                height: "0.5rem",
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "1.5rem",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            padding: "0rem 0rem 0rem 0.5rem",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "0.5rem",
          }}
        >
          <b
            style={{
              position: "relative",
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            {companyLogoUrl}
          </b>
          <div style={{ position: "relative" }}>{employeeTenure}</div>
          <div
            style={{
              alignSelf: "stretch",
              position: "relative",
              color: "#666",
            }}
          >
            {companyInfoDescription}
          </div>
          <img
            style={{
              position: "relative",
              width: "0.88rem",
              height: "0.88rem",
              overflow: "hidden",
              flexShrink: "0",
              display: "none",
            }}
            alt=""
            src={productDimensions}
          />
          <img
            style={{
              position: "relative",
              width: "0.88rem",
              height: "0.88rem",
              overflow: "hidden",
              flexShrink: "0",
              display: "none",
            }}
            alt=""
            src={productDimensions2}
          />
        </div>
        <div
          style={{
            borderRadius: "2px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "0.25rem",
            fontSize: "1rem",
          }}
        >
          <b style={{ position: "relative", fontWeight: "600" }}>{jobTitle}</b>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              fontSize: "0.88rem",
              color: "#666",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <div style={{ position: "relative" }}>{employmentPeriod}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
