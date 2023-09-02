import { Box, Skeleton, Stack, Typography } from "@mui/material";

const FiltersSkeleton = () => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        flex: "1",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1.5rem",
        textAlign: "left",
        fontSize: "0.88rem",
        color: "#191919",
        fontFamily: "'Noto Sans'",
        padding: "0 16px",
      }}
    >
      <Typography
        sx={{ color: "black", textAlign: "start", width: "100%" }}
        variant="h5"
      >
        Filters
      </Typography>
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={"179px"}
        sx={{ borderRadius: "6px" }}
      />
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={"102px"}
        sx={{ borderRadius: "6px" }}
      />
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={"271px"}
        sx={{ borderRadius: "6px" }}
      />
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={"179px"}
        sx={{ borderRadius: "6px" }}
      />
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={"102px"}
        sx={{ borderRadius: "6px" }}
      />
      <Skeleton
        variant="rectangular"
        width={"100%"}
        height={"271px"}
        sx={{ borderRadius: "6px" }}
      />
    </div>
  );
};
export default FiltersSkeleton;
