import { FunctionComponent } from "react";
import {
  TextField,
  Button,
  Box,
  Stack,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  OutlinedInput,
  Link,
  Grid,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import googleIcon from "../../assets/google.svg";
import EastIcon from "@mui/icons-material/East";
const Login: FunctionComponent = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: "405px",
          p: { xs: "0 16px", lg: "0" },
        }}
      >
        {/* Placeholder */}

        <div />
        <Stack marginBottom={"32px"} textAlign={"center"} rowGap={"8px"}>
          <Typography variant="h2">Change password</Typography>
          <Typography variant="body2" color={"secondary"}>
            We'll email you instructions on how to reset your password
          </Typography>
        </Stack>

        <Stack
          rowGap={"16px"}
          marginBottom={"32px"}
          width={"100%"}
          sx={{ paddingX: { xs: "0", lg: "36px" } }}
        >
          <FormControl fullWidth>
            <InputLabel htmlFor="email">New password</InputLabel>
            <OutlinedInput
              id="new-password"
              name="new-password"
              type="password"
              placeholder="New password"
              // value={inputs.job_title}
              // onChange={handleChange}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="email">Confirm password</InputLabel>
            <OutlinedInput
              id="confirm-password"
              name="confirm-password"
              type="password"
              placeholder="Confirm password"
              // value={inputs.job_title}
              // onChange={handleChange}
            />
          </FormControl>

          <Button
            variant="contained"
            endIcon={<EastIcon />}
            size="large"
            fullWidth
            onClick={handleSubmit}
          >
            Change my password
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
