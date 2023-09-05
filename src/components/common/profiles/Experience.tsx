import { FunctionComponent } from "react";

import { Box, Stack, Typography } from "@mui/material";
import moment from "moment";
type Props = {
  isFullView?: boolean;
  data: Experience;
};

const Experience = ({ data, isFullView }: Props) => {
  const {
    starts_at,
    ends_at,
    degree_name,
    company,
    location,
    company_linkedin_profile_url,
    description,
    logo_url,
    specialities,
  } = data;

  const allSpecialities = specialities ? specialities.slice() : [];
  const specialitiesToShow = isFullView
    ? allSpecialities
    : allSpecialities.slice(0, 1);
  const getTimeline = (start: string, end: string) => {
    const startTime = moment(start).format("MMM YYYY");
    let endTime = "present";
    if (end) endTime = moment(end).format("MMM YYYY");
    return `${startTime} - ${endTime}`;
  };
  const getDifference = (start: string, end: string) => {
    const startDate = moment(start);
    let endDate = moment();
    if (end) endDate = moment(end);
    const years = endDate.diff(startDate, "years");
    startDate.add(years, "years"); // Remove years from the start date
    const months = endDate.diff(startDate, "months");

    return ` ${years > 0 ? `${years} yrs` : ""} ${months} mos`;
  };
  return (
    <Box width={"100%"}>
      <Box width={"100%"} display={"flex"}>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          {/* Logo */}

          <Box sx={{ position: "relative", width: "48px", height: "48px" }}>
            <img
              style={{ objectFit: "cover" }}
              alt=""
              src={
                "https://storage.googleapis.com/linkedingpt/school-tel-aviv-university.jpeg"
              }
            />
          </Box>

          {/* Vertical Line */}

          <Box height={"100%"} paddingTop={"4px"} position={"relative"}>
            <Box
              width={"1.5px"}
              bgcolor={"#B2B2B2"}
              height={"100%"}
              position={"absolute"}
              left={"50%"}
              sx={{ transform: "translateX(-50%)" }}
            />
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"}>
          {/* Company */}

          <Stack
            sx={{ paddingLeft: "8px", paddingBottom: "24px" }}
            rowGap={"8px"}
          >
            <Typography variant="subtitle1"> Wix.com</Typography>
            <Typography variant="body2">
              {" "}
              3 yr and 2 mo at the company
            </Typography>
            <Typography variant="body2" color={"secondary.dark"}>
              Company Info: 6,874 employees · public · IPO 2013 · Website
              builder software
            </Typography>
          </Stack>
        </Box>
      </Box>
      {specialitiesToShow.map((speciality, i) => {
        return (
          <Box width={"100%"} display={"flex"} key={i} marginBottom={"10px"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              paddingTop={"4px"}
            >
              {/* Placeholder. For setting width */}

              <Box width={"48px"} />

              {/* Circle */}

              <Box
                width={"0"}
                marginTop={"4px"}
                p={"4px"}
                borderRadius={"100px"}
                bgcolor={"#B2B2B2"}
                height={"0"}
              />
              {/* Vertical Line */}
              {i + 1 !== specialitiesToShow.length && (
                <Box height={"100%"} paddingTop={"4px"} position={"relative"}>
                  <Box
                    width={"1.5px"}
                    bgcolor={"#B2B2B2"}
                    height={"100%"}
                    position={"absolute"}
                    left={"50%"}
                    sx={{ transform: "translateX(-50%)" }}
                  />
                </Box>
              )}
            </Box>

            {/* Role */}

            <Stack sx={{ width: "100%" }} rowGap={"8px"} marginLeft={"-8px"}>
              <Typography variant="subtitle1">{speciality}</Typography>
              <Typography variant="body2">
                {getTimeline(starts_at, ends_at)} &#183;
                {getDifference(starts_at, ends_at)}
              </Typography>
              <Typography variant="body2" color={"secondary.dark"}>
                {location}
              </Typography>
            </Stack>
          </Box>
        );
      })}
      <Box
        component={"p"}
        paddingLeft={"39px"}
        sx={{ whiteSpace: "pre-line", display: isFullView ? "block" : "none" }}
      >
        {description}
      </Box>
    </Box>
  );
};

export default Experience;
