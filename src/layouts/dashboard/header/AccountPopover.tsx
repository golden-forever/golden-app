import React, { useState } from "react";
// @mui
import { alpha } from "@mui/material/styles";
import { Menu } from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
  Button,
  Popover,
  IconButton,
} from "@mui/material";
import userAvatar from "../../../assets/rectangle-116@2x.png";
// mocks_
import {
  East,
  Logout,
  ReplyOutlined,
  SettingsOutlined,
  MessageOutlined,
  LocalPhoneOutlined,
  EmailOutlined,
} from "@mui/icons-material";
import { useAppSelector } from "../../../hooks";
import { useNavigate } from "react-router-dom";
// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: "Profile",
    icon: <SettingsOutlined />,
  },
  {
    label: "Send an invite",
    icon: <ReplyOutlined />,
  },
  {
    label: "Give us feedback",
    icon: <MessageOutlined />,
  },
];

const CONTACT_OPTIONS = [
  {
    label: "Call support",
    contactInfo: "051-222-878-05",
    icon: <LocalPhoneOutlined />,
  },
  {
    label: "Email support",
    contactInfo: "support@goldenhire.io",
    icon: <EmailOutlined />,
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const [open, setOpen] = useState<(EventTarget & HTMLButtonElement) | null>(
    null
  );
  const { user_info } = useAppSelector(store => store.user);
  const handleOpen = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setOpen(event.currentTarget);
  };
  const navigate = useNavigate();
  const handleClose = () => {
    setOpen(null);
    navigate("/login");
  };

  return (
    <>
      <Button
        variant="text"
        onClick={handleOpen}
        sx={{
          display: { xs: "none", lg: "block" },
          p: 0,

          ...(open && {}),
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            minWidth: "170px",
          }}
        >
          <Avatar alt="user" src={userAvatar} />
          <Box
            marginLeft={"8px"}
            color={"white"}
            textAlign={"left"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Typography variant="subtitle2" fontSize={"12px"}>
              {" "}
              {user_info?.name}
            </Typography>
            <Typography
              variant="caption"
              fontSize={"10px"}
              sx={{
                color: "rgba(237, 237, 237, 0.8)",
                textTransform: "none",
              }}
            >
              {user_info?.email}
            </Typography>
          </Box>
        </Box>
      </Button>
      <IconButton
        sx={{
          display: {
            xs: "flex",
            lg: "none",
            color: "white",
            marginRight: "-6px",
          },
        }}
        onClick={handleOpen}
      >
        <Menu />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: "100%",
            maxWidth: "260px",
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.5rem",
            p: "16px",
          }}
        >
          <Avatar alt="user" src={userAvatar} />
          <Box color={"black"} textAlign={"left"}>
            <Typography variant="h6"> {user_info?.name}</Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(102, 102, 102, 0.8)",
                textTransform: "none",
              }}
            >
              {user_info?.email}
            </Typography>
          </Box>
        </Box>

        {/* Links */}

        <Stack>
          {MENU_OPTIONS.map((option, i) => (
            <Button
              variant="text"
              startIcon={option.icon}
              endIcon={<East />}
              fullWidth
              key={i}
              sx={{
                display: "flex",
                transition: "opacity 0.3s ease 0s",
                justifyContent: "start",
                alignItems: "center",
                p: "14px 16px",
                borderRadius: 0,
                color: "black",
                fontWeight: 300,
                "& .MuiButton-startIcon": { marginRight: "12px" },

                "& .MuiButton-endIcon": {
                  transition: "opacity 0.3s ease 0s",
                  opacity: 0,
                  margin: "0 0 0 auto",
                },
                ":hover": {
                  "& .MuiButton-endIcon": { opacity: 1 },
                },
              }}
              onClick={handleClose}
            >
              {option.label}
            </Button>
          ))}
        </Stack>

        {/* Links End */}

        <Divider />

        {/* Contact Support */}

        <Stack>
          {CONTACT_OPTIONS.map((option, i) => (
            <Button
              variant="text"
              fullWidth
              startIcon={option.icon}
              endIcon={<East />}
              key={i}
              sx={{
                display: "flex",
                transition: "opacity 0.3s ease 0s",
                position: "relative",
                justifyContent: "start",
                alignItems: "center",
                p: "14px 16px",
                borderRadius: 0,
                color: "black",
                "& .MuiButton-startIcon": { marginRight: "12px" },

                "& .MuiButton-endIcon": {
                  transition: "opacity 0.3s ease 0s",
                  opacity: 0,
                  margin: "0 0 0 auto",
                },
                ":hover": {
                  "& .MuiButton-endIcon": { opacity: 1 },
                },
              }}
              onClick={handleClose}
            >
              <Box color={"black"} textAlign={"left"}>
                <Typography variant="h6"> {option.label} </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "rgba(102, 102, 102, 0.8)",
                    textTransform: "none",
                  }}
                >
                  {option.contactInfo}
                </Typography>
              </Box>
            </Button>
          ))}
        </Stack>

        {/* Contact Support End */}

        <Divider />

        {/* Footer */}

        <Button
          variant="text"
          fullWidth
          startIcon={<Logout />}
          sx={{
            display: "flex",
            transition: "opacity 0.3s ease 0s",
            position: "relative",
            justifyContent: "start",
            alignItems: "center",
            p: "14px 16px",
            borderRadius: 0,
            color: "red",
            "& .MuiButton-startIcon": { marginRight: "12px" },
          }}
          onClick={handleClose}
        >
          Log out
        </Button>

        {/* Footer End */}
      </Popover>
    </>
  );
}
