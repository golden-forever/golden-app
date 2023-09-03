import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import { Box, AppBar, Toolbar } from "@mui/material";

// utils

// components

import logoImg from "../../../assets/image2@2x.png";
import { Link } from "react-router-dom";

// ----------------------------------------------------------------------

const HEADER_DESKTOP = 60;
const StyledRoot = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  boxShadow: "none",
  [theme.breakpoints.up("lg")]: {
    width: `100vw`,
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
type Props = {};

export default function Header({}: Props) {
  const logo = (
    <Box
      component="img"
      src={logoImg}
      sx={{
        width: { xs: "28px", lg: "44px" },
        height: { xs: "28px", lg: "44px" },
        cursor: "pointer",
      }}
    />
  );

  return (
    <StyledRoot>
      <Box
        sx={{
          p: { xs: "8px 16px", lg: "8px 24px" },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link to="/"> {logo}</Link>
        <Box
          component={"span"}
          fontSize={"20px"}
          fontWeight={"600"}
          marginLeft={"12px"}
          sx={{ display: { xs: "none", lg: "block" } }}
        >
          Golden
        </Box>
      </Box>
    </StyledRoot>
  );
}
