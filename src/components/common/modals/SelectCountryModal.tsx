import * as React from "react";
import {
  Button,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog,
  DialogActions,
  Typography,
  TextField,
  Autocomplete,
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

export default function SelectCountryModal({
  open,
  onClose,
}: SimpleDialogProps) {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Select your company to get started</DialogTitle>
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
      <DialogContent>
        <DialogContentText>
          {"Start typing the company name to select"}
        </DialogContentText>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={params => <TextField {...params} label="Movie" />}
        />
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
const top100Films = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
];
