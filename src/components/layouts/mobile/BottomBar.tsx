import { Box, Button } from "@mui/material";

type Props = {
  btnLeftText: string;
  btnRightText: string;
  onLeftBtnClick: () => void;
  onRightBtnClick: () => void;
  btnRightClr?: "primary" | "success";
};
const BottomBar = ({
  btnLeftText,
  btnRightText,
  onLeftBtnClick,
  onRightBtnClick,
  btnRightClr,
}: Props) => {
  return (
    <Box
      position={"fixed"}
      bgcolor={"white"}
      width={"100%"}
      bottom={"0"}
      left={"0"}
      p={"20px 16px"}
      justifyContent={"space-between"}
      borderTop={"1px solid"}
      borderColor={"secondary.light"}
      sx={{
        display: { xs: "flex", md: "none" },
        borderTopLeftRadius: "8px",
        borderTopRightRadius: "8px",
        boxShadow: "1px -1px 22px -10px rgba(0,0,0,0.4)",
      }}
    >
      <Button
        type="button"
        variant="outlined"
        color="primary"
        onClick={onLeftBtnClick}
      >
        {btnLeftText}
      </Button>
      <Button
        type="submit"
        variant="contained"
        color={btnRightClr ? btnRightClr : "primary"}
        onClick={onRightBtnClick}
      >
        {btnRightText}
      </Button>
    </Box>
  );
};
export default BottomBar;
