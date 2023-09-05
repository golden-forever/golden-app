import { Box, Stack, Typography } from "@mui/material";

type Props = {
  data: Education;
};

const Education = ({ data }: Props) => {
  const { school, logo_url, starts_at, ends_at, field_of_study } = data;
  const start = new Date(starts_at).getFullYear();
  const end = new Date(ends_at).getFullYear();
  return (
    <Box width={"100%"} display={"flex"}>
      <Box
        sx={{
          position: "relative",
          width: "48px",
          height: "48px",
          marginRight: "24px",
        }}
      >
        <img style={{ objectFit: "cover" }} alt="" src={logo_url} />
      </Box>
      <Box>
        <Stack rowGap={"8px"}>
          <Typography variant="subtitle1">{school} </Typography>
          <Stack rowGap={"4px"}>
            <Typography variant="body2">{field_of_study}</Typography>
            <Typography variant="body2" color={"secondary.dark"}>
              {start} - {end}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Education;
const mockData = {
  _id: "avi-ventura",
  city: null,
  connections: 500.0,
  country: "IL",
  country_full_name: "Israel",
  first_name: "Avi",
  headline: "Product Team Lead",
  last_name: "Ventura",
  occupation: "Product Team Lead at Surecomp",
  profile_pic_url: "https://storage.googleapis.com/linkedingpt/avi-ventura.jpg",
  public_identifier: "avi-ventura",
  state: null,
  summary:
    "• Vast experience building successful consumer Mobile Web and Desktop products from scratch.\n• Demonstrated success in creating innovative and user-friendly software applications and customer- facing features.\n• Experience working on Agile enabled teams (SCRUM) as a product owner.\n• Experience launching consumer-facing online service (Web/ Mobile/ Tablet) from start to finish.\n• Proven ability to understand complex business problems, apply strong analytical skill and create \n  technical requirements (PRD's, user stories - high level and detailed design).\n• Deep experience in analytics, and massive understanding of the online industry.\n\n• Have both the ability to work independently and also to integrate with other team members.\n• Attention to detail and the ability to see the bigger picture.\n• Ability to manage cross-functional projects without direct authority.\n\n• In my spare time I'm a long distances runner and a triathlete. Also I was competing in The Iron Man Triathlon competition in Austria 2019.",
  education: [
    {
      starts_at: "2000-01-01T00:00:00.000+0000",
      ends_at: "2003-12-31T00:00:00.000+0000",
      field_of_study: "Mass communication, management",
      degree_name: "BA",
      school: "Hamaslool Ha'akademi shel Hamichlala Leminhal",
      school_linkedin_profile_url:
        "https://il.linkedin.com/school/the-college-of-management/",
      description: "Student",
      logo_url:
        "https://storage.googleapis.com/linkedingpt/school-the-college-of-management.jpeg",
    },
  ],
  full_name: "Avi Ventura",
};
