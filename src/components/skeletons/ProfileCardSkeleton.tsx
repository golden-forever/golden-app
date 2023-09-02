import { Box, Skeleton, Stack, Typography } from "@mui/material";
import { EducationSkeleton, ExperienceSkeleton, FeetbackBtnsSkeleton } from ".";

const ProfileCardSkeleton = () => {
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
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={"220px"}
        sx={{ borderRadius: "6px", maxWidth: "220px" }}
      >
        <Box width={"100%"} />
      </Skeleton>
      {/* <Box
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
            borderRadius: "6px",

            width: "100%",
          }}
          alt=""
          src={profile_pic_url}
        />
      </Box> */}
      <Box width={"100%"} paddingLeft={"24px"}>
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"start"}
        >
          <Skeleton
            variant="rectangular"
            width={"50%"}
            height={"24px"}
            sx={{ borderRadius: "6px", maxWidth: "320px" }}
          />
          <FeetbackBtnsSkeleton />
        </Box>
        <Box width={"100%"} display="flex" m={"32px 0 24px 0"}>
          <ExperienceSkeleton />
          <Box marginX={"24px"} />
          <EducationSkeleton />
        </Box>
        {/* <Box width={"100%"} display="flex"> */}
      </Box>
    </Box>
  );
};
export default ProfileCardSkeleton;
