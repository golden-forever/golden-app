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
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { getRequest } from "../../../utils/apiHelper";
import { getImgSrc } from "../../../utils/helpers";

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}
export default function SelectCountryModal({
  open,
  onClose,
}: SimpleDialogProps) {
  const [companies, setCompanies] = useState<CompanyInfo[]>([]);

  const [value, setValue] = useState<null | CompanyInfo>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const handleChange = async (inputVal: string) => {
    if (inputVal.length > 0) {
      const res = await getRequest(`autocomplete/company/${inputVal}`);
      const data: CompanyInfo[] = res.data;
      setCompanies(data);
    }
    setInputValue(inputVal);
  };
  const dispatch = useAppDispatch();
  const handleSubmit = () => {
    if (value) {
      // dispatch(getCompany(value.company_id));
      onClose();
    }
  };
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
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            handleChange(newInputValue);
          }}
          sx={{
            maxHeight: "200px",
          }}
          getOptionLabel={option => `${option.company_name}`}
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
                  src={
                    option &&
                    (option?.company_logo_url || getImgSrc(option.company_id))
                  }
                  alt=""
                  style={{ objectFit: "cover", height: "24px" }}
                />
              </Box>{" "}
              {option?.company_name}
            </Box>
          )}
        />
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          color="primary"
          disabled={!value}
          onClick={handleSubmit}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
