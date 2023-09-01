import {
  Button,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog,
  DialogActions,
  Typography,
  IconButton,
  styled,
  TextareaAutosize,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";

import { Close } from "@mui/icons-material";
const blue = {
  400: "#3399FF",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};
const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
    width: 100%;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 6px;
    color:  black;
    background:  "#fff";
    border: 1px solid #EDEDED;
    
  
    &:hover {
      border-color: ##0A66C2;
    }
  
    &:focus {
      border-color: ##0A66C2;
      box-shadow: none;
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);
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
        <FormControl fullWidth sx={{ marginTop: "20px" }}>
          <InputLabel
            disableAnimation
            htmlFor="component-outlined"
            sx={{ transform: "translate(0, -100%)" }}
          >
            Text Description *
          </InputLabel>
          <TextField
            multiline
            name="job_description"
            // value={inputs.job_description}
            minRows={16}
            placeholder="The candidate's skills do not fit the requirements..."
            // onChange={handleChange}
          />
        </FormControl>
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
