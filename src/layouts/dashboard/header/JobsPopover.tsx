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
// mocks_
import account from "../../../_mock/account";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { East, KeyboardArrowDown } from "@mui/icons-material";
// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: "Home",
    icon: "eva:home-fill",
  },
  {
    label: "Profile",
    icon: "eva:person-fill",
  },
  {
    label: "Settings",
    icon: "eva:settings-2-fill",
  },
];

// ----------------------------------------------------------------------

export default function JobsPopover() {
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
        onClick={handleOpen}
        sx={{
          p: 0,
          color: "white",
          fontSize: { xs: "14px", lg: "16px" },
          fontWeight: "400",
          "& .MuiButton-endIcon": { marginLeft: { xs: "0", lg: "4px" } },
          ...(open && {}),
        }}
        endIcon={<KeyboardArrowDown />}
      >
        <Typography
          variant="body1"
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
            maxWidth: "300px",
          }}
        >
          Product Team Lead for Technify
        </Typography>
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
            maxWidth: "320px",
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: "4px",
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1">Other Job</Typography>
        </Box>

        <Stack>
          {MENU_OPTIONS.map(option => (
            <Button
              variant="text"
              endIcon={<East />}
              fullWidth
              sx={{
                display: "flex",
                transition: "opacity 0.3s ease 0s",
                position: "relative",
                fontSize: "14px",
                justifyContent: "space-between",
                alignItems: "center",
                p: "14px 16px 14px 29px",
                borderRadius: 0,
                color: "black",

                "& .MuiButton-endIcon": {
                  transition: "opacity 0.3s ease 0s",
                  opacity: 0,
                },
                ":hover": {
                  "& .MuiButton-endIcon": { opacity: 1 },
                },
              }}
              key={option.label}
              onClick={handleClose}
            >
              {option.label}
            </Button>
          ))}
        </Stack>

        <Divider />

        <Button
          variant="text"
          fullWidth
          sx={{
            display: "flex",
            transition: "opacity 0.3s ease 0s",
            position: "relative",
            justifyContent: "start",
            alignItems: "center",
            p: "14px 16px 14px 29px",
            borderRadius: 0,
          }}
        >
          Create a new Job
        </Button>
      </Popover>
    </>
  );
}
