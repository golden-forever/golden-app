import { Box, Skeleton } from "@mui/material";

const EducationSkeleton = () => {
  return (
    <Box
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      rowGap={"16px"}
    >
      <Box display={"flex"}>
        {/* Logo */}

        <Skeleton
          variant="rectangular"
          height={"48px"}
          width={"48px"}
          sx={{ borderRadius: "6px", marginRight: "16px" }}
        >
          <Box height={"48px"} width={"48px"} />
        </Skeleton>

        <Skeleton
          width={"100%"}
          variant="rectangular"
          height={"84px"}
          sx={{ borderRadius: "6px" }}
        ></Skeleton>
      </Box>
      <Box display={"flex"}>
        {/* Logo */}

        <Skeleton
          variant="rectangular"
          height={"48px"}
          width={"48px"}
          sx={{ borderRadius: "6px", marginRight: "16px" }}
        >
          <Box height={"48px"} width={"48px"} />
        </Skeleton>

        <Skeleton
          width={"100%"}
          variant="rectangular"
          height={"84px"}
          sx={{ borderRadius: "6px", marginBottom: "6px" }}
        ></Skeleton>
      </Box>
    </Box>
  );
};
export default EducationSkeleton;
