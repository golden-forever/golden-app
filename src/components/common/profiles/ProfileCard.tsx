import { Button, Drawer } from "@mui/material";
import Education from "./Education";
import Experience from "./Experience";
import userImg from "../../../assets/avatar2@2x.png";
import ProfileSlideover from "../../locofy/ProfileSlideover";
import FeetbackBtns from "./FeetbackBtns";
type Props = {
  onProfileClick: any;
  openFeedbackModal: () => void;
};
function ProfileCard({ onProfileClick, openFeedbackModal }: Props) {
  return (
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
        src={userImg}
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
              Avi Ventura
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
              <div style={{ position: "relative" }}>Beer Sheva</div>
              <div
                style={{
                  position: "relative",
                  borderRadius: "100px",
                  backgroundColor: "#666",
                  width: "0.13rem",
                  height: "0.13rem",
                }}
              />
              <div style={{ position: "relative" }}>South District</div>
            </div>
          </div>
          <FeetbackBtns openFeedbackModal={openFeedbackModal} />
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
              companyDescription="/logos7.svg"
              companyLogoUrl="Surecomp"
              employeeTenure="3 yrs and 6 mo at the company"
              companyInfoDescription="Company Info: 234 employees · series A · AI-Powered Video transcriptions"
              productDimensions="/icons14.svg"
              productDimensions2="/icons14.svg"
              jobTitle="Product Team Lead"
              employmentPeriod="Feb 2023 - Present · 7 mos"
              propWidth="23.13rem"
              propAlignSelf="unset"
              propBoxSizing="border-box"
              propBackgroundImage="url('/frame-372492@3x.png')"
            />
            <Button
              style={{ cursor: "pointer" }}
              variant="text"
              color="primary"
              onClick={onProfileClick}
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
              educationDetails="/logos15.svg"
              universityName="The College of Management Academic Studies"
              degreeDetails="BA, Mass communication, management"
              dateRange="2000 - 2003"
              showLogosIcon={false}
              educationPosition="unset"
              educationWidth="unset"
              educationGap="1rem"
              educationAlignSelf="stretch"
              iconWidth="3rem"
              iconHeight="3rem"
              iconPadding="0.63rem"
              iconBackgroundImage="url('/icon3@3x.png')"
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
                }}
              >
                <img
                  style={{
                    position: "relative",
                    width: "2rem",
                    height: "1.97rem",
                  }}
                  alt=""
                  src="/logos16.svg"
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
                  University of Cambridge
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
                    Master of regional Planning, Graduate Real Estate Minor
                    regional Planning
                  </div>
                  <div style={{ position: "relative", color: "#666" }}>
                    3 years
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileCard;
