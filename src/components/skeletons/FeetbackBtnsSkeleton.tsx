import { Button, Skeleton, Typography } from "@mui/material";

const FeetbackBtns = () => {
  return (
    <Skeleton
      variant="rectangular"
      height={"44px"}
      sx={{ borderRadius: "6px" }}
    >
      <div
        style={{
          display: "flex",

          gap: "8px",
        }}
      >
        <Button>Good</Button>
        <Button>Not Sure</Button>
        <Button>Not Good</Button>
      </div>
    </Skeleton>
  );
};
export default FeetbackBtns;
