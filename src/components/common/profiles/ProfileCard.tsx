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
import ProfileSlideover from "../../locofy/ProfileSlideover";
import FeetbackBtns from "./FeetbackBtns";
import { East } from "@mui/icons-material";
type Props = {
  onProfileClick: any;
  openFeedbackModal: () => void;
  data: ProfileData;
  handleSelect: (data: ProfileData) => void;
};

function ProfileCard({
  onProfileClick,
  openFeedbackModal,
  data,
  handleSelect,
}: Props) {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      sx={{
        borderBottom: "1px solid #ededed",
        padding: "1.5rem",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          borderRadius: "6px",
          width: "30%",
          maxWidth: "220px",
          height: "220px",
        }}
      >
        <img
          style={{
            objectFit: "cover",
          }}
          alt=""
          src={userImg}
        />
      </Box>
      <Box width={"100%"} paddingLeft={"24px"}>
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"start"}
        >
          <Stack direction={"row"} alignItems={"center"}>
            <Typography variant="h4" color={"primary.main"}>
              Hili Ozer-Singer
            </Typography>{" "}
            <Divider orientation="vertical" flexItem sx={{ m: "0 8px" }} />
            <Typography variant="body2" color={"secondary"}>
              Tel-Aviv &#183; Israel
            </Typography>
          </Stack>
          <FeetbackBtns openFeedbackModal={openFeedbackModal} />
        </Box>
        <Box width={"100%"} display="flex" m={"32px 0 24px 0"}>
          <Experience data={data.experience[0]} />
          <Divider orientation="vertical" flexItem sx={{ margin: "0 24px" }} />

          <Education data={data.education[0]} />
        </Box>
        {/* <Box width={"100%"} display="flex"> */}
        <Button
          endIcon={<East />}
          onClick={() => {
            onProfileClick();
            handleSelect(data);
          }}
        >
          See full profile
        </Button>
      </Box>
    </Box>
  );
}
export default ProfileCard;
