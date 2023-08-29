import * as React from "react";

import {
  Button,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog,
  DialogActions,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import Textarea from "../inputs/Textarea";
import notFoundImg from "../../../assets/image@2x.png";
import { Close } from "@mui/icons-material";
const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  //   selectedValue: string;
  onClose: () => void;
}

export default function NoJobModal({ open, onClose }: SimpleDialogProps) {
  return (
    <Dialog onClose={onClose} open={open}>
      <IconButton
        sx={{
          marginRight: "-10px",
          position: "absolute",
          top: "0",
          right: "0",
          transform: "translate(-50%, 20%)",
        }}
        onClick={onClose}
      >
        <Close />
      </IconButton>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "0",
        }}
      >
        <div
          style={{
            borderRadius: "700px",
            backgroundColor: "#fafafa",
            display: "flex",
            flexDirection: "row",
            padding: "24px",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <img
            style={{
              position: "relative",
              width: "42px",
              height: "42px",
              overflow: "hidden",
              flexShrink: "0",
              objectFit: "cover",
            }}
            alt=""
            src={notFoundImg}
          />
        </div>
      </div>
      <DialogTitle>We did find any job posting from Techify</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {
            "Please copy and paste your job posting here and we will find you candidates."
          }
        </DialogContentText>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            onClose();
          }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
