import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Education from "./Education";
import Experience from "./Experience";
import userImg from "../../../assets/avatar2@2x.png";

import FeetbackBtns from "./FeetbackBtns";
import { East } from "@mui/icons-material";
import { getYearsInIndustry } from "../../../utils/helpers";
type Props = {
  onProfileClick: any;
  openFeedbackModal: () => void;
  data: ProfileData;
  handleSelect: () => void;
};
function ProfileCard({
  onProfileClick,
  openFeedbackModal,
  data,
  handleSelect,
}: Props) {
  const {
    first_name,
    last_name,
    city,
    country,
    profile_pic_url,
    experiences,
    occupation,
  } = data;
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={{ xs: "column", lg: "row" }}
      sx={{
        borderBottom: "1px solid #ededed",
        padding: { xs: "1rem", lg: "1.5rem 0 1.5rem 0", xl: "1.5rem" },
        justifyContent: "space-between",
      }}
    >
      <Box display={"flex"} columnGap={{ xs: "16px", lg: "0" }}>
        {/* User Avatar */}

        <Box
          sx={{
            borderRadius: { xs: "4px", lg: "6px" },
            width: { xs: "115px", lg: "15vw" },
            maxWidth: "220px",
            height: { xs: "115px", lg: "220px" },
          }}
        >
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

        {/* User Avatar End*/}

        {/* Profile Info Mobile*/}

        <Stack
          display={{ xs: "block", lg: "none" }}
          direction={{ xs: "column", lg: "row" }}
          alignItems={{ xs: "start", lg: "center" }}
        >
          <Typography variant="h4" color={"primary.main"}>
            {first_name} {last_name}
          </Typography>{" "}
          <Divider
            orientation="vertical"
            flexItem
            sx={{ m: "0 8px", display: { xs: "none", lg: "block" } }}
          />
          <Typography
            variant="body2"
            color={"secondary.dark"}
            marginBottom={{ xs: "8px", lg: "0" }}
          >
            {city} &#183; {country}
          </Typography>
          <Typography variant="body2" display={{ sx: "block", lg: "none" }}>
            {" "}
            {getYearsInIndustry(experiences)} years in industry
          </Typography>
          <Typography
            variant="body2"
            color={"secondary.dark"}
            display={{ sx: "block", lg: "none" }}
          >
            {occupation}
          </Typography>
        </Stack>

        {/* Profile Info Mobile End */}
      </Box>

      {/* Feetback Buttons Mobile*/}

      <Box display={{ xs: "block", lg: "none" }} marginTop={"12px"}>
        <FeetbackBtns
          openFeedbackModal={openFeedbackModal}
          action={data.label}
          data={data}
        />
      </Box>

      {/* Feetback Buttons Mobile End*/}

      <Box
        width={"100%"}
        sx={{ paddingLeft: { xs: "0", lg: "0.5rem", xl: "1.5rem" } }}
      >
        <Box
          display={{ xs: "none", lg: "flex" }}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"start"}
        >
          {/* Profile Info */}

          <Stack
            direction={{ xs: "column", lg: "row" }}
            alignItems={{ xs: "start", lg: "center" }}
          >
            <Typography variant="h4" color={"primary.main"}>
              {first_name} {last_name}
            </Typography>{" "}
            <Divider
              orientation="vertical"
              flexItem
              sx={{ m: "0 8px", display: { xs: "none", lg: "block" } }}
            />
            <Typography
              variant="body2"
              color={"secondary.dark"}
              marginBottom={{ xs: "8px", lg: "0" }}
            >
              {city} &#183; {country}
            </Typography>
            <Typography variant="body2" display={{ sx: "block", lg: "none" }}>
              {" "}
              {getYearsInIndustry(experiences)} years in industry
            </Typography>
            <Typography
              variant="body2"
              color={"secondary.dark"}
              display={{ sx: "block", lg: "none" }}
            >
              {occupation}
            </Typography>
          </Stack>

          {/* Profile Info End*/}

          <Box display={{ xs: "block", lg: "block" }}>
            <FeetbackBtns
              openFeedbackModal={openFeedbackModal}
              action={data.label}
              data={data}
            />
          </Box>
        </Box>
        {/* <Box display={{ xs: "block", lg: "none" }}>
          <FeetbackBtns
            openFeedbackModal={openFeedbackModal}
            action={data.label}
            data={data}
          />
        </Box> */}

        {/* Experience and Education */}

        <Box width={"100%"} display="flex" m={"32px 0 24px 0"}>
          <Experience data={data.experiences[0]} />
          <Divider
            orientation="vertical"
            flexItem
            sx={{ margin: "0 24px", display: { xs: "none", lg: "block" } }}
          />
          <Box display={{ xs: "none", lg: "block" }} width={"100%"}>
            <Education data={data.education[0]} />
          </Box>
        </Box>

        {/* Experience and Education End*/}

        <Button
          endIcon={<East />}
          sx={{ padding: "0" }}
          onClick={() => {
            onProfileClick();
            handleSelect();
          }}
        >
          See full profile
        </Button>
      </Box>
    </Box>
  );
}
export default ProfileCard;
