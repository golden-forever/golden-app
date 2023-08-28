import {
  FunctionComponent,
  useState,
  useMemo,
  type CSSProperties,
  useCallback,
} from "react";
import { Button } from "@mui/material";
import Experience from "./Experience";
import ProfileSlideover from "./ProfileSlideover";
import PortalDrawer from "./PortalDrawer";
import Education from "./Education";

type ProfileCardType = {
  avatar?: string;
  texth3?: string;
  textb?: string;
  yrAnd6MoAtTheCompany?: string;
  companyInfo234EmployeesSe?: string;
  icons?: string;
  icons1?: string;
  textb1?: string;
  mar2019Jun20194Mos?: string;
  logos?: string;
  textb2?: string;
  masterOfRegionalPlanningG?: string;
  prop?: string;
  logos1?: string;
  cornelUniversity?: string;
  masterOfRegionalPlanningG1?: string;
  prop1?: string;
  education?: boolean;
  showLogosIcon?: boolean;

  /** Style props */
  divBackgroundImage?: CSSProperties["backgroundImage"];
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined || value === "") return;
  return { [key]: value };
};
const ProfileCard: FunctionComponent<ProfileCardType> = ({
  avatar,
  texth3,
  textb,
  yrAnd6MoAtTheCompany,
  companyInfo234EmployeesSe,
  icons,
  icons1,
  textb1,
  mar2019Jun20194Mos,
  logos,
  textb2,
  masterOfRegionalPlanningG,
  prop,
  logos1,
  cornelUniversity,
  masterOfRegionalPlanningG1,
  prop1,
  education,
  divBackgroundImage,
  propBackgroundImage,
  propAlignSelf,
  showLogosIcon,
}) => {
  const frameDiv6Style: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("backgroundImage", divBackgroundImage),
    };
  }, [divBackgroundImage]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("backgroundImage", propBackgroundImage),
    };
  }, [propBackgroundImage]);

  const cornelUniversityStyle: CSSProperties = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", propAlignSelf),
    };
  }, [propAlignSelf]);

  const [isProfileFullViewSlideoverOpen, setProfileFullViewSlideoverOpen] =
    useState(false);

  const openProfileFullViewSlideover = useCallback(() => {
    setProfileFullViewSlideoverOpen(true);
  }, []);

  const closeProfileFullViewSlideover = useCallback(() => {
    setProfileFullViewSlideoverOpen(false);
  }, []);

  return (
    <>
      <div
        style={{
          alignSelf: "stretch",
          backgroundColor: "#fff",
          borderBottom: "1px solid #ededed",
          display: "flex",
          flexDirection: "row",
          padding: "1.5rem",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "1.5rem",
          textAlign: "left",
          fontSize: "1rem",
          color: "#191919",
          fontFamily: "'Noto Sans'",
        }}
      >
        <img
          style={{
            borderRadius: "6px",
            width: "13.75rem",
            height: "13.75rem",
            objectFit: "cover",
          }}
          alt=""
          src={avatar}
        />
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "2rem",
          }}
        >
          <header
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "space-between",
              textAlign: "left",
              fontSize: "1.25rem",
              color: "#0a66c2",
              fontFamily: "'Noto Sans'",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "0.5rem",
              }}
            >
              <h3
                style={{
                  margin: "0",
                  position: "relative",
                  fontSize: "inherit",
                  fontWeight: "600",
                  fontFamily: "inherit",
                }}
              >
                {texth3}
              </h3>
              <img
                style={{
                  position: "relative",
                  width: "0.06rem",
                  height: "0.81rem",
                }}
                alt=""
                src="/divider1.svg"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "0.25rem",
                  fontSize: "0.88rem",
                  color: "#666",
                }}
              >
                <div style={{ position: "relative" }}>Tel Aviv</div>
                <div
                  style={{
                    position: "relative",
                    borderRadius: "100px",
                    backgroundColor: "#666",
                    width: "0.13rem",
                    height: "0.13rem",
                  }}
                />
                <div style={{ position: "relative" }}>Israel</div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "0.5rem",
              }}
            >
              <Button variant="contained" color="primary">
                Good
              </Button>
              <Button variant="contained" color="primary">
                Not Sure
              </Button>
              <Button variant="contained" color="primary">
                Not Good
              </Button>
            </div>
          </header>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              padding: "0rem 2.75rem 0rem 0rem",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
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
              <Experience
                companyDescription="/logos2.svg"
                companyLogoUrl="Wix.com"
                employeeTenure="3 yr and 2 mo at the company"
                companyInfoDescription="Company Info: 6,874 employees · public · IPO 2013 ·  Website builder software"
                productDimensions="/icons8.svg"
                productDimensions2="/icons8.svg"
                jobTitle="Head of Product"
                employmentPeriod="Sep 2022 - Present · 1 yr"
                propWidth="unset"
                propAlignSelf="stretch"
                propBoxSizing="border-box"
                propBackgroundImage="url('/frame-37249@3x.png')"
              />
              <Button
                style={{ cursor: "pointer" }}
                variant="text"
                color="primary"
                onClick={openProfileFullViewSlideover}
              >
                See full profile
              </Button>
            </div>
            <img
              style={{
                alignSelf: "stretch",
                position: "relative",
                maxHeight: "100%",
                width: "0.06rem",
              }}
              alt=""
              src="/divider2.svg"
            />
            <div
              style={{
                alignSelf: "stretch",
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "1.5rem",
                minWidth: "21.25rem",
              }}
            >
              <Education
                educationDetails="/logos3.svg"
                universityName="Reichman University- FORE Executive Education"
                degreeDetails="Bachelor of Business Administration (B.B.A.), Business Administration and Management, General"
                dateRange="2005 - 2008"
                showLogosIcon={false}
                educationPosition="unset"
                educationWidth="unset"
                educationGap="1rem"
                educationAlignSelf="stretch"
                iconWidth="3rem"
                iconHeight="3rem"
                iconPadding="0.63rem"
                iconBackgroundImage="url('/icon@3x.png')"
                iconBackgroundSize="cover"
                iconBackgroundRepeat="no-repeat"
                iconBackgroundPosition="top"
                logosIconWidth="2rem"
                logosIconHeight="1.97rem"
                rightSideGap="0.5rem"
                cornelUniversityFontSize="1rem"
                cornelUniversityAlignSelf="stretch"
                frameDivGap="0.25rem"
                masterOfRegionalFontSize="0.88rem"
                masterOfRegionalDisplay="inline-block"
                masterOfRegionalAlignItems="unset"
                masterOfRegionalWidth="unset"
                masterOfRegionalAlignSelf="stretch"
                divFontSize="0.88rem"
              />
              {!education && (
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "none",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: "1rem",
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
                      backgroundImage: "url('48x48x-1701653451')",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "top",
                    }}
                  >
                    <img
                      style={{
                        position: "relative",
                        width: "2rem",
                        height: "1.97rem",
                        display: "none",
                      }}
                      alt=""
                      src={logos1}
                    />
                  </div>
                  <div
                    style={{
                      flex: "1",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "0.5rem",
                    }}
                  >
                    <div style={{ position: "relative", fontWeight: "600" }}>
                      {cornelUniversity}
                    </div>
                    <div
                      style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "0.25rem",
                        fontSize: "0.88rem",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          alignItems: "center",
                          width: "16rem",
                        }}
                      >
                        {masterOfRegionalPlanningG1}
                      </div>
                      <div style={{ position: "relative", color: "#666" }}>
                        {prop1}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {isProfileFullViewSlideoverOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeProfileFullViewSlideover}
        >
          <ProfileSlideover onClose={closeProfileFullViewSlideover} />
        </PortalDrawer>
      )}
    </>
  );
};

export default ProfileCard;
