import PropTypes, { number } from "prop-types";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// @mui
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  Link,
  Button,
  Drawer,
  Typography,
  Avatar,
  Stack,
  Divider,
} from "@mui/material";
// mock
import account from "../../../_mock/account";
// hooks
import useResponsive from "../../../hooks/useResponsive";
// components
import Scrollbar from "../../../components/common/scrollbar";
import {
  APP_BAR_DESKTOP,
  APP_BAR_MOBILE,
  MOBILE_TOP_SIDEBAR,
  NAV_WIDTH,
} from "../../../utils/constants";

//
import Content from "./config";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import Logo from "../../../components/sibebarNav/Logo";
import { setIsMobileSidebar } from "../../../features/user/userSlice";

// ----------------------------------------------------------------------

const StyledAccount = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}));

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
  headerHeight: PropTypes.number,
};
type Props = { openNav: boolean; onCloseNav: () => void; headerHeight: number };
export default function Nav({ openNav, onCloseNav, headerHeight }: Props) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive("up", "lg");
  const dispatch = useAppDispatch();
  const { isMobileSidebar } = useAppSelector(state => state.user);
  const toggleMobileSidebar = () => {
    setIsMobileSidebar(!isMobileSidebar);
  };

  useEffect(() => {
    if (openNav) {
      dispatch(setIsMobileSidebar(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Content pathname={pathname} toggleMobileSidebar={toggleMobileSidebar} />

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: { xs: NAV_WIDTH, lg: NAV_WIDTH },
              bgcolor: "secondary.lighter",
              paddingTop: `44px`,
              height: `calc(100vh - ${headerHeight}px)`,
              borderRightStyle: "solid",
              borderColor: "secondary.light",
              marginTop: `${headerHeight}px`,
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open
          variant="permanent"
          anchor="top"
          PaperProps={{
            sx: {
              width: { xs: "100vw" },
              bgcolor: "secondary.lighter",
              height: isMobileSidebar
                ? `calc(100vh - ${APP_BAR_MOBILE}px)`
                : `${MOBILE_TOP_SIDEBAR}px`,
              borderRightStyle: "solid",
              borderColor: "secondary.light",
              marginTop: `${APP_BAR_MOBILE}px`,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
