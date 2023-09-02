import { Box, Skeleton, Stack, Typography } from "@mui/material";

const ExperienceSkeleton = () => {
  return (
    <Box width={"100%"} display={"flex"} flexDirection={"column"}>
      <Box display={"flex"}>
        {/* Logo */}

        <Skeleton
          variant="rectangular"
          width={"48px"}
          height={"48px"}
          sx={{ borderRadius: "6px", marginRight: "8px" }}
        >
          <Box width={"48px"} />
        </Skeleton>

        <Skeleton
          width={"100%"}
          variant="rectangular"
          height={"84px"}
          sx={{ borderRadius: "6px", marginBottom: "6px" }}
        ></Skeleton>
      </Box>

      <Box width={"100%"} display={"flex"} marginBottom={"10px"}>
        {/* Role */}
        <div>
          <Box width={"48px"} />
        </div>
        <Stack sx={{ width: "100%" }}>
          <Skeleton
            width={"75%"}
            height={"41px"}
            variant="rectangular"
            sx={{ borderRadius: "6px" }}
          />
          <Skeleton sx={{ bgcolor: "grey.500", borderRadius: "6px" }}>
            <Typography variant="body2" color={"secondary"}>
              spmething
            </Typography>
          </Skeleton>
        </Stack>
      </Box>
    </Box>
  );
};
export default ExperienceSkeleton;
