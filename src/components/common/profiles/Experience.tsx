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
    company_info,
    degree_name,
    company,
    school_linkedin_profile_url,
    description,
    logo_url,
    roles,
  } = data;
  const rolesToShow = isFullView ? roles : roles.slice(0, 1);
  const getTimeline = (start: string, end: string) => {
    const startTime = moment(start).format("MMM YYYY");
    const endTime = moment(end).format("MMM YYYY");
    return `${startTime} - ${endTime}`;
  };
  const getDifference = (start: string, end: string) => {
    const startDate = moment(start);
    const endDate = moment(end);
    const years = endDate.diff(startDate, "years");
    startDate.add(years, "years"); // Remove years from the start date
    const months = endDate.diff(startDate, "months");

    return ` ${years} yrs ${months} mos`;
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

          <Stack sx={{ paddingLeft: "8px", paddingBottom: "24px" }}>
            <Typography variant="subtitle1"> Wix.com</Typography>
            <Typography variant="body2">
              {" "}
              3 yr and 2 mo at the company
            </Typography>
            <Typography variant="body2" color={"secondary"}>
              Company Info: 6,874 employees · public · IPO 2013 · Website
              builder software
            </Typography>
          </Stack>
        </Box>
      </Box>
      {rolesToShow.map((role, i) => {
        const { label, starts_at, ends_at, location } = role;
        return (
          <Box width={"100%"} display={"flex"} key={i} marginBottom={"10px"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              width="48px"
              paddingTop={"4px"}
            >
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
              {i + 1 !== rolesToShow.length && (
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
            <Box display={"flex"} flexDirection={"column"} rowGap={"24px"}>
              {/* Role */}

              <Stack>
                <Typography variant="subtitle1">{label}</Typography>
                <Typography variant="body2">
                  {getTimeline(starts_at, ends_at)} &#183;
                  {getDifference(starts_at, ends_at)}
                </Typography>
                <Typography variant="body2" color={"secondary"}>
                  {location}
                </Typography>
              </Stack>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Experience;

// const mockData = {
//   _id: "avi-ventura",
//   city: null,
//   connections: 500.0,
//   country: "IL",
//   country_full_name: "Israel",
//   first_name: "Avi",
//   headline: "Product Team Lead",
//   last_name: "Ventura",
//   occupation: "Product Team Lead at Surecomp",
//   profile_pic_url: "https://storage.googleapis.com/linkedingpt/avi-ventura.jpg",
//   public_identifier: "avi-ventura",
//   state: null,
//   summary:
//     "• Vast experience building successful consumer Mobile Web and Desktop products from scratch.\n• Demonstrated success in creating innovative and user-friendly software applications and customer- facing features.\n• Experience working on Agile enabled teams (SCRUM) as a product owner.\n• Experience launching consumer-facing online service (Web/ Mobile/ Tablet) from start to finish.\n• Proven ability to understand complex business problems, apply strong analytical skill and create \n  technical requirements (PRD's, user stories - high level and detailed design).\n• Deep experience in analytics, and massive understanding of the online industry.\n\n• Have both the ability to work independently and also to integrate with other team members.\n• Attention to detail and the ability to see the bigger picture.\n• Ability to manage cross-functional projects without direct authority.\n\n• In my spare time I'm a long distances runner and a triathlete. Also I was competing in The Iron Man Triathlon competition in Austria 2019.",
//   education: [
//     {
//       starts_at: "2000-01-01T00:00:00.000+0000",
//       ends_at: "2003-12-31T00:00:00.000+0000",
//       field_of_study: "Mass communication, management",
//       degree_name: "BA",
//       school: "Hamaslool Ha'akademi shel Hamichlala Leminhal",
//       school_linkedin_profile_url:
//         "https://il.linkedin.com/school/the-college-of-management/",
//       description: "Student",
//       logo_url:
//         "https://storage.googleapis.com/linkedingpt/school-the-college-of-management.jpeg",
//     },
//   ],
//   experience: [
//     {
//       starts_at: "2000-01-01T00:00:00.000+0000",
//       ends_at: "2003-12-31T00:00:00.000+0000",
//       company_info:
//         "Company Info: 6,874 employees · public · IPO 2013 ·  Website builder software",
//       degree_name: "BA",
//       company: "Wix.com",
//       school_linkedin_profile_url:
//         "https://il.linkedin.com/school/the-college-of-management/",
//       description: "Student",
//       logo_url:
//         "https://storage.googleapis.com/linkedingpt/school-the-college-of-management.jpeg",
//       roles: [
//         {
//           label: "Head of Product",
//           starts_at: "2000-01-01T00:00:00.000+0000",
//           ends_at: "2003-12-31T00:00:00.000+0000",
//           location: "Tel-Aviv, Israel",
//         },
//       ],
//     },
//     {
//       starts_at: "2000-01-01T00:00:00.000+0000",
//       ends_at: "2003-12-31T00:00:00.000+0000",
//       company_info:
//         "Company Info: 6,874 employees · public · IPO 2013 ·  Website builder software",
//       degree_name: "BA",
//       company: "Wix.com",
//       school_linkedin_profile_url:
//         "https://il.linkedin.com/school/the-college-of-management/",
//       description: "Student",
//       logo_url:
//         "https://storage.googleapis.com/linkedingpt/school-product-league-product-management-mentoring-program.jpeg",
//       roles: [
//         {
//           label: "Head of Product",
//           starts_at: "2000-01-01T00:00:00.000+0000",
//           ends_at: "2003-12-31T00:00:00.000+0000",
//           location: "Tel-Aviv, Israel",
//         },
//       ],
//     },
//   ],
//   full_name: "Avi Ventura",
// };
