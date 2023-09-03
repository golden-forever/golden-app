import PropTypes, { number } from "prop-types";
import { useEffect } from "react";
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

//
import Content from "./config";
import { useAppSelector } from "../../../hooks";
import Logo from "../../../components/sibebarNav/Logo";

// ----------------------------------------------------------------------

const NAV_WIDTH = 304;

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

  const { company_info } = useAppSelector(state => state.user);

  useEffect(() => {
    if (openNav) {
      onCloseNav();
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
      <Content pathname={pathname} />

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

              height: "auto",
              borderRightStyle: "solid",
              borderColor: "secondary.light",
              marginTop: `${headerHeight}px`,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
