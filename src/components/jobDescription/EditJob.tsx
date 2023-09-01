import React, { FunctionComponent, useState } from "react";
import {
  TextField,
  Button,
  InputLabel,
  Box,
  FormControl,
  OutlinedInput,
  Typography,
  styled,
  TextareaAutosize,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { updateProject } from "../../features/user/userSlice";

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
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: none;
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
);
type Props = {
  isEdit?: boolean;
  setSelected?: () => void;
};

const EditJob = ({ isEdit, setSelected }: Props) => {
  const { job_info, company_info, recent_pid } = useAppSelector(
    store => store.user
  );
  const initialInputs = {
    job_title: isEdit ? job_info?.job_title || "" : "",
    job_location: isEdit ? job_info?.job_location || "" : "",
    job_description: isEdit ? job_info?.job_description || "" : "",
  };
  const [inputs, setInputs] = useState(initialInputs);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleNavigate = () => {
    navigate(`/job/${recent_pid}`);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e?.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEdit) {
      dispatch(updateProject(inputs));
      if (setSelected) setSelected();
    } else {
      dispatch(updateProject(inputs));
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "620px",
        alignSelf: "stretch",
        m: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "32px",
        textAlign: "center",
        fontSize: "24px",
        color: "#191919",
        fontFamily: "'Noto Sans'",
      }}
    >
      <h2
        style={{
          margin: "0",
          alignSelf: "stretch",
          position: "relative",
          fontSize: "inherit",
          fontWeight: "600",
          fontFamily: "inherit",
        }}
      >
        {isEdit
          ? job_info?.job_title
          : `New Job for ${company_info?.company_name}`}
      </h2>
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "32px",
          textAlign: "left",
          fontSize: "16px",
          color: "#0a66c2",
        }}
      >
        <Box
          sx={{
            alignSelf: "stretch",
            borderTop: "1px solid #ededed",
            borderBottom: "1px solid #ededed",
            display: "flex",
            flexDirection: "column",
            padding: "24px 0px",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "16px",
          }}
        >
          <FormControl fullWidth sx={{ marginTop: "20px" }}>
            <InputLabel
              disableAnimation
              htmlFor="component-outlined"
              sx={{ transform: "translate(0, -100%)" }}
            >
              Job Title
            </InputLabel>
            <OutlinedInput
              id="component-outlined"
              name="job_title"
              placeholder="Enter job title"
              value={inputs.job_title}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ marginTop: "20px" }}>
            <InputLabel
              disableAnimation
              htmlFor="component-outlined"
              sx={{ transform: "translate(0, -100%)" }}
            >
              Location
            </InputLabel>
            <OutlinedInput
              id="component-outlined"
              name="job_location"
              placeholder="Enter location"
              value={inputs.job_location}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl fullWidth sx={{ marginTop: "20px" }}>
            <InputLabel
              disableAnimation
              htmlFor="component-outlined"
              sx={{ transform: "translate(0, -100%)" }}
            >
              Job Description
            </InputLabel>
            <TextField
              multiline
              name="job_description"
              value={inputs.job_description}
              minRows={16}
              placeholder="Enter job description"
              onChange={handleChange}
            />
          </FormControl>
        </Box>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#666",
          }}
        >
          <Button
            type="button"
            variant="outlined"
            color="primary"
            onClick={isEdit ? setSelected : handleNavigate}
          >
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Confirm
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default EditJob;
