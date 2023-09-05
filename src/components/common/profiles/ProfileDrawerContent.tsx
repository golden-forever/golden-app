import {
  Box,
  Button,
  Collapse,
  Drawer,
  IconButton,
  Link,
  Stack,
  Typography,
  styled,
} from "@mui/material";

import Education from "./Education";
import Experience from "./Experience";

import FeetbackBtns from "./FeetbackBtns";
import {
  LinkedIn,
  KeyboardArrowDown,
  KeyboardArrowUp,
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Close,
} from "@mui/icons-material";
import { useState } from "react";
import { useAppSelector } from "../../../hooks";
import { getYearsInIndustry } from "../../../utils/helpers";

const PaginationButton = styled(IconButton)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  // padding:'4px',
  border: "none",
  borderRadius: "4px",
  lineHeight: 1.5,
  backgroundColor: "#EDEDED",
  color: "#191919",

  "&:hover": {
    boxShadow: "none",
    backgroundColor: "#d8d7d7",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#d8d7d7",
  },
  "&:focus": {
    backgroundColor: "#d8d7d7",
  },
  "&:disabled": {
    backgroundColor: "#e6e5e57c",
  },
});

type Props = {
  openFeedbackModal: () => void;
  data: ProfileData;
  indexOfSelected: number;
  indexOfLast: number;

  handlePagination: (page: Page) => void;
};

const ProfileDrawerContent = ({
  openFeedbackModal,
  data,
  indexOfSelected,
  indexOfLast,
  handlePagination,
}: Props) => {
  const [isShowMore, setIseShowMore] = useState(false);
  const [isShowMoreExperience, setIseShowMoreExperience] = useState(false);
  const [isShowMoreEducation, setIseShowMoreEducation] = useState(false);
  const {
    first_name,
    last_name,
    city,
    country,
    profile_pic_url,
    occupation,
    experiences,
    summary,
  } = data;
  const getCompanySize = () => {
    const companySize = experiences.find(experience => experience.company_size);
    if (companySize) return companySize.company_size;
    return null;
  };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#fff",
        boxShadow: "0px 32px 64px -12px rgba(16, 24, 40, 0.14)",
        borderBottom: "1px solid #d1d5db",
        boxSizing: "border-box",
        width: { xs: "100%", lg: "750px" },
        maxWidth: "750px",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        padding: { xs: "24px 16px 44px", lg: "24px 32px 44px" },
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "16px",
        height: "100%",
        overflow: "auto",
      }}
      data-animate-on-scroll
    >
      <Box
        component={"header"}
        sx={{
          position: "relative",
          alignSelf: "stretch",
          borderBottom: "2px solid #ededed",
          display: "flex",
          flexDirection: { xs: "column-reverse", lg: "row" },
          padding: "0px 0px 16px",
          alignItems: { xs: "start", lg: "center" },
          justifyContent: "space-between",
          rowGap: { xs: "18px", lg: "none" },
          width: "100%",
        }}
      >
        <Typography variant="h3" fontSize="20px">
          {occupation}
        </Typography>

        <Box
          display={"flex"}
          justifyContent={{ xs: "space-between, center" }}
          paddingRight={"56px"}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
            }}
          >
            <PaginationButton
              sx={{ p: { xs: "1px", lg: "4px" } }}
              disabled={1 === indexOfLast}
              onClick={() => handlePagination("prev")}
            >
              <KeyboardArrowLeft />
            </PaginationButton>
            <Typography variant="body2" color={"secondary"}>
              <span>{indexOfSelected + 1}</span> of <span>{indexOfLast}</span>
            </Typography>
            <PaginationButton
              sx={{ p: { xs: "2px", lg: "4px" } }}
              disabled={indexOfSelected + 1 === indexOfLast}
              onClick={() => handlePagination("next")}
            >
              <KeyboardArrowRight />
            </PaginationButton>
          </div>
        </Box>
        <IconButton
          sx={{
            marginRight: "-10px",
            position: "absolute",
            transform: "translateY(-8%)",
            top: "0",
            right: "0",
          }}
        >
          <Close />
        </IconButton>
      </Box>
      <main
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "32px",
          textAlign: "left",
          fontSize: "20px",
          color: "#191919",
          fontFamily: "'Noto Sans'",
        }}
      >
        <Box width={"100%"}>
          <Box
            sx={{
              alignSelf: "stretch",
              display: "flex",

              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "12px",
              fontSize: "24px",
            }}
          >
            <Box
              sx={{
                borderRadius: { xs: "4px", lg: "6px" },
                width: { xs: "120px", lg: "200px" },
                height: { xs: "120px", lg: "200px" },
                position: "relative",
              }}
            >
              {/* Placeholder */}
              <Box
                sx={{
                  width: { xs: "120px", lg: "200px" },
                }}
              />
              <Box
                component={"img"}
                sx={{
                  objectFit: "cover",
                  borderRadius: { xs: "4px", lg: "6px" },
                  width: "100%",
                }}
                alt=""
                src={profile_pic_url}
              />
            </Box>
            <Stack>
              <Typography
                variant="h4"
                sx={{ marginBottom: { xs: "0", lg: "8px" } }}
              >
                {first_name} {last_name}
              </Typography>
              <Typography
                variant="body2"
                color={"secondary.dark"}
                marginBottom={"8px"}
                sx={{ display: { xs: "block", lg: "none" } }}
              >
                {city} &#183; {country}{" "}
              </Typography>
              <Typography
                variant="body2"
                sx={{ marginBottom: { xs: "2px", lg: "4px" } }}
              >
                {" "}
                {getYearsInIndustry(experiences)} years in industry
              </Typography>
              <Typography
                variant="body2"
                color={"secondary.dark"}
                marginBottom={{ xs: "0", lg: "28px" }}
              >
                Company Info:{" "}
                {getCompanySize() && `${getCompanySize()} employees ·`} public ·
                IPO 2013 · {experiences[0].industry}
              </Typography>
              <Stack direction={"row"} m={"15px 0 5px 0"}>
                <Typography
                  variant="body2"
                  color={"secondary.dark"}
                  sx={{ display: { xs: "none", lg: "block" } }}
                >
                  {city}, {country}{" "}
                </Typography>
                <Box
                  component={"span"}
                  sx={{
                    fontSize: "16px",
                    fontWeight: "bolder",
                    margin: "0 5px",
                    display: { xs: "none", lg: "block" },
                  }}
                >
                  &#183;
                </Box>

                <Link
                  href="#"
                  underline="none"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "16px",
                  }}
                >
                  {" "}
                  <LinkedIn /> Public profile
                </Link>
              </Stack>
              <Box
                sx={{
                  width: "fit-content",
                  display: { xs: "none", lg: "block" },
                }}
              >
                <FeetbackBtns
                  openFeedbackModal={openFeedbackModal}
                  action={data.label}
                  data={data}
                  isBlue
                  handleActionForDrawer={() => handlePagination("next")}
                />
              </Box>
            </Stack>
          </Box>
          {/* Feetback Buttons Mobile*/}

          <Box
            display={{ xs: "block", lg: "none" }}
            marginTop={"12px"}
            width={"100%"}
          >
            <FeetbackBtns
              openFeedbackModal={openFeedbackModal}
              action={data.label}
              isBlue
              padding={"10px 0"}
              data={data}
              isFullBtn
            />
          </Box>
        </Box>

        {/* Feetback Buttons Mobile End*/}
        <div
          style={{
            alignSelf: "stretch",
            borderBottom: "1px solid #ededed",
            display: "flex",
            flexDirection: "column",
            padding: "0px 0px 16px",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "8px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              position: "relative",
              fontWeight: "600",
            }}
          >
            Summary
          </div>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "16px",
              fontSize: "14px",
              color: "#666",
            }}
          >
            <Collapse
              in={isShowMore}
              collapsedSize={"40px"}
              sx={{ whiteSpace: "pre-line" }}
            >
              {summary}
            </Collapse>

            <Button
              variant="text"
              color="primary"
              sx={{ p: "0" }}
              endIcon={isShowMore ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
              onClick={() => setIseShowMore(!isShowMore)}
            >
              {isShowMore ? "Show less of summary" : "Show more of summary"}
            </Button>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            borderBottom: "1px solid #cbd5e1",
            display: "flex",
            flexDirection: "column",
            padding: "0px 0px 16px",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "24px",
          }}
        >
          <h3
            style={{
              margin: "0",
              alignSelf: "stretch",
              flex: "1",
              position: "relative",
              fontSize: "inherit",
              fontWeight: "600",
              fontFamily: "inherit",
              color: "inherit",
            }}
          >{`Experience`}</h3>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              fontSize: "16px",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <Collapse
                in={isShowMoreExperience}
                collapsedSize={50}
                sx={{ whiteSpace: "pre-line" }}
              >
                {data.experiences.map((experience, i) => (
                  <Experience key={i} data={experience} isFullView />
                ))}
              </Collapse>
            </div>

            <Button
              variant="text"
              color="primary"
              sx={{ p: "0", m: "0 auto" }}
              endIcon={
                isShowMoreExperience ? (
                  <KeyboardArrowUp />
                ) : (
                  <KeyboardArrowDown />
                )
              }
              onClick={() => setIseShowMoreExperience(!isShowMoreExperience)}
            >
              {isShowMoreExperience ? "Show less" : "Show more"}
            </Button>
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            borderBottom: "1px solid #cbd5e1",
            display: "flex",
            flexDirection: "column",
            padding: "0px 0px 16px",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "24px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3
              style={{
                margin: "0",
                flex: "1",
                position: "relative",
                fontSize: "inherit",
                fontWeight: "600",
                fontFamily: "inherit",
                color: "inherit",
              }}
            >
              Education
            </h3>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "16px",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <Collapse in={isShowMoreEducation} collapsedSize={50}>
                {data.education.map((education, i) => (
                  <Education key={i} data={education} />
                ))}
              </Collapse>
            </div>
            <Button
              variant="text"
              color="primary"
              sx={{ p: "0", m: "0 auto" }}
              endIcon={
                isShowMoreEducation ? (
                  <KeyboardArrowUp />
                ) : (
                  <KeyboardArrowDown />
                )
              }
              onClick={() => setIseShowMoreEducation(!isShowMoreEducation)}
            >
              {isShowMoreEducation ? "Show less" : "Show more"}
            </Button>
          </div>
        </div>
      </main>
    </Box>
  );
};
export default ProfileDrawerContent;
