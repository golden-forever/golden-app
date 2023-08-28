import * as React from "react";

import {
  Button,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog,
  DialogActions,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import Textarea from "../inputs/Textarea";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  //   selectedValue: string;
  onClose: (value: string) => void;
}

export default function FeedbackModal({ open, onClose }: SimpleDialogProps) {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Feedback</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {
            "For system to avoid such profiles, please state why you declined profile (this is private)"
          }
        </DialogContentText>
        <Textarea />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="primary">
          Edit
        </Button>
        <Button variant="contained" color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
