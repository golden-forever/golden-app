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
  OutlinedInput,
} from "@mui/material";
import { createFilterOptions } from "@mui/material/Autocomplete";

import { Close } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { getRequest } from "../../../utils/apiHelper";
import { getImgSrc } from "../../../utils/helpers";
import companiesList from "../../../assets/autocompletes/companies_autocomplete.json";
type CustomCompany = {
  company_id: string;
  name: string;
  profile_pic_url: string | null;
};
export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}
export default function SelectCountryModal({
  open,
  onClose,
}: SimpleDialogProps) {
  // @ts-expect-error
  const [companies, setCompanies] = useState<CustomCompany[]>(companiesList);

  const [value, setValue] = useState<null | CompanyInfo>(null);
  const [inputValue, setInputValue] = useState<string>("");
  const handleChange = async (inputVal: string) => {
    // if (inputVal.length > 0) {
    //   const res = await getRequest(`autocomplete/company/${inputVal}`);
    //   const data: CompanyInfo[] = res.data;
    //   setCompanies(data);
    // }
    console.log({ inputVal });
    setInputValue(inputVal);
  };
  const dispatch = useAppDispatch();
  const handleSubmit = () => {
    if (value) {
      // dispatch(getCompany(value.company_id));
      onClose();
    }
  };
  // const filterOptions = createFilterOptions({ limit: 30 });

  return (
    <Dialog onClose={onClose} open={open}>
      <Typography padding={"32px 24px 12px 24px"} variant="h3">
        Select your company to get started
      </Typography>
      <IconButton
        sx={{
          marginRight: "-10px",
          position: "absolute",
          top: "0",
          right: "0",
          transform: "translate(-50%, 50%)",
        }}
        onClick={onClose}
      >
        <Close />
      </IconButton>
      {/* Placeholder to add width */}
      <Box sx={{ width: "700px" }} />

      <DialogContent sx={{ height: "370px", paddingTop: "0" }}>
        <DialogContentText marginBottom={"32px"}>
          {"Start typing the company name to select"}
        </DialogContentText>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          ListboxProps={{ style: { maxHeight: "15rem" } }}
          value={
            value !== null
              ? {
                  company_id: value.company_id,
                  name: value.name,
                  profile_pic_url: value?.company_logo_url || null,
                }
              : null
          }
          onChange={(event, newValue) => {
            if (newValue === null) setValue(null);
            else
              setValue({
                ...newValue,
                company_logo_url: newValue.profile_pic_url,
              });
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            handleChange(newInputValue);
          }}
          sx={{
            maxHeight: "200px",
          }}
          getOptionLabel={option => `${option.name}`}
          options={companies}
          renderInput={params => {
            return (
              <TextField
                {...params}
                label=" Company"
                sx={{ "& label": { marginBottom: "10px" } }}
              />
            );
          }}
          renderOption={(props, option) => {
            const logo = option?.profile_pic_url
              ? option.profile_pic_url
              : getImgSrc(option?.company_id || "placeholder");
            return (
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
                    src={logo}
                    alt=""
                    style={{ objectFit: "cover", height: "24px" }}
                  />
                </Box>{" "}
                {option?.name}
              </Box>
            );
          }}
        />
      </DialogContent>

      <DialogActions sx={{ p: { xs: "16px", lg: "24px 32px" } }}>
        <Button
          variant="contained"
          color="primary"
          disabled={!value}
          onClick={handleSubmit}
          sx={{ width: { xs: "100%", lg: "fit-content" } }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}
