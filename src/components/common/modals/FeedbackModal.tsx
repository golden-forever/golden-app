import * as React from "react";

import {
  Button,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog,
  DialogActions,
  Typography,
  IconButton,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import Textarea from "../inputs/Textarea";
import { Close } from "@mui/icons-material";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  //   selectedValue: string;
  onClose: () => void;
}

export default function FeedbackModal({ open, onClose }: SimpleDialogProps) {
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
      <DialogTitle>Feedback</DialogTitle>
      <DialogContent>
        <DialogContentText marginBottom={"24px"}>
          {
            "For system to avoid such profiles, please state why you declined profile (this is private)"
          }
        </DialogContentText>
        <Textarea rows={10} label="Text Description" />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="primary" onClick={onClose}>
          Skip
        </Button>
        <Button variant="contained" color="primary" onClick={onClose}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
