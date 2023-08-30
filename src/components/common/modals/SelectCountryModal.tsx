import { useEffect, useState } from "react";
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
  Box,
} from "@mui/material";

import { Close } from "@mui/icons-material";
import { useAppSelector } from "../../../hooks";

const emails = ["username@gmail.com", "user02@gmail.com"];

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}
export default function SelectCountryModal({
  open,
  onClose,
}: SimpleDialogProps) {
  const { companies } = useAppSelector(state => state.company);
  const [value, setValue] = useState<null | Company>(null);
  const [inputValue, setInputValue] = useState<null | string>(null);

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
      {/* Placeholder to add width */}
      <Box sx={{ width: "700px" }} />

      <DialogContent sx={{ height: "300px" }}>
        <DialogContentText marginBottom={"32px"}>
          {"Start typing the company name to select"}
        </DialogContentText>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue ? inputValue : ""}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          sx={{
            maxHeight: "200px",
          }}
          getOptionLabel={option => `${option.company}`}
          options={companies}
          renderInput={params => {
            return <TextField {...params} label=" Company" />;
          }}
          renderOption={(props, option) => (
            <Box
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
              key={Math.random()}
            >
              <Box
                width={"24px"}
                position={"relative"}
                marginRight={"16px"}
                paddingY={"12px"}
              >
                <img
                  src={option?.logo_url}
                  alt=""
                  style={{ objectFit: "cover", height: "24px" }}
                />
              </Box>{" "}
              {option?.company}
            </Box>
          )}
        />
      </DialogContent>

      <DialogActions>
        <Button variant="contained" color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
