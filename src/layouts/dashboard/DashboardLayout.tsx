import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
//
import Header from "./header";
import SideNavbar from "./sideNavbar";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useAppDispatch } from "../../hooks";
import { getProfiles } from "../../features/project/projectSlice";
import { showMe } from "../../features/user/userSlice";

// Top Bar sizes
import {
  APP_BAR_DESKTOP,
  APP_BAR_MOBILE,
  MOBILE_TOP_SIDEBAR,
} from "../../utils/constants";

// ----------------------------------------------------------------------

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
  paddingTop: APP_BAR_MOBILE + MOBILE_TOP_SIDEBAR + 24,
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const headerHeight = isDesktop ? APP_BAR_DESKTOP : APP_BAR_MOBILE;

  // Only for dev
  useEffect(() => {
    dispatch(showMe(""));
  }, []);
  return (
    <StyledRoot>
      <Header onOpenNav={() => setOpen(true)} />
      <SideNavbar
        openNav={true}
        onCloseNav={() => setOpen(false)}
        headerHeight={headerHeight}
      />

      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  );
}
