import React, { useState } from "react";
// @mui
import { alpha } from "@mui/material/styles";
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
  Button,
  Popover,
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

  const handleOpen = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <Button
        variant="text"
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {}),
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.5rem",
          }}
        >
          <Avatar alt="user" src={userAvatar} />
          <Box
            color={"white"}
            textAlign={"left"}
            display={"flex"}
            flexDirection={"column"}
          >
            <Typography variant="subtitle2" fontSize={"12px"}>
              {" "}
              Alma Lawson
            </Typography>
            <Typography
              variant="caption"
              fontSize={"10px"}
              sx={{
                color: "rgba(237, 237, 237, 0.8)",
                textTransform: "none",
              }}
            >
              alma.lawson@example.com
            </Typography>
          </Box>
        </Box>
      </Button>

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
            <Typography variant="h6"> Alma Lawson</Typography>
            <Typography
              variant="body2"
              sx={{
                color: "rgba(102, 102, 102, 0.8)",
                textTransform: "none",
              }}
            >
              alma.lawson@example.com
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
