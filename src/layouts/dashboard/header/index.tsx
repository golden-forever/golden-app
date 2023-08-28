import PropTypes from "prop-types";
// @mui
import { styled } from "@mui/material/styles";
import { Box, AppBar, Toolbar, IconButton, Divider } from "@mui/material";

// utils

// components

import AccountPopover from "./AccountPopover";
import JobsPopover from "./JobsPopover";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

// ----------------------------------------------------------------------

const HEADER_DESKTOP = 104;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  position: "fixed",
  boxShadow: "none",
  [theme.breakpoints.up("lg")]: {
    width: `100vw`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("lg")]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};
type Props = {};

export default function Header({}: Props) {
  return (
    <StyledRoot>
      <StyledToolbar>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box display={"flex"} alignItems={"center"} padding={"8px 0"}>
            <Logo />
            <JobsPopover />
          </Box>
          <AccountPopover />
        </Box>
        <Box
          width={"100%"}
          height={"2px"}
          sx={{ backgroundColor: "rgba(237, 237, 237, 0.5)" }}
        />
        <NavLinks />
      </StyledToolbar>
    </StyledRoot>
  );
}
