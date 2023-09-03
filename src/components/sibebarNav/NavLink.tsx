import CloseIcon from "@mui/icons-material/Close";
import { Box, Button } from "@mui/material";
type Props = {
  title: string;
  isActive: boolean;
  handleClick: () => void;
};
const NavLink = ({ title, isActive, handleClick }: Props) => {
  return (
    <Button
      variant="text"
      endIcon={<CloseIcon />}
      className={isActive ? "active" : ""}
      fullWidth
      sx={{
        display: "flex",
        transition: "opacity 1s ease 0s",
        fontSize: "16px",
        color: "#666666",
        textOverflow: "ellipsis",
        borderRadius: "0",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
        justifyContent: "space-between",
        alignItems: "center",
        p: "14px 16px 14px 29px",
        "::after": {
          content: "''",
          opacity: 0,
          transition: "opacity 1s ease 0s",

          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "5px",
          backgroundColor: "primary.main",
          borderTopRightRadius: "4px",
          borderBottomRightRadius: "4px",
        },
        "&.active": {
          color: "primary.main",
          "::after": {
            opacity: 1,
          },
        },
        "& .MuiButton-endIcon": {
          transition: "opacity 1s ease 0s",
          opacity: 0,
        },
        ":hover": {
          background: "transparent",
          "& .MuiButton-endIcon": { opacity: 1 },
          "::after": {
            opacity: 1,
          },
        },
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {title}
      </Box>
    </Button>
  );
};
export default NavLink;
