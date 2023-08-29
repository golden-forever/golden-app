import { useState } from "react";
import { Outlet } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
//
import Header from "./header";
import SideNavbar from "./sideNavbar";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 112;
const APP_BAR_DESKTOP = 112;

const StyledRoot = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const Main = styled("div")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  background: "#fff",
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const headerHeight = isDesktop ? APP_BAR_DESKTOP : APP_BAR_MOBILE;

  return (
    <StyledRoot>
      <Header onOpenNav={() => setOpen(true)} />
      <SideNavbar
        openNav={open}
        onCloseNav={() => setOpen(false)}
        headerHeight={headerHeight}
      />

      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  );
}
