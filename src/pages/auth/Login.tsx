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
        <Stack marginBottom={"32px"} alignItems={"center"} rowGap={"8px"}>
          <Typography variant="h2">Log in to your account</Typography>
          {/* <Typography variant="body2" color={"secondary"}>
            Techify
          </Typography> */}
        </Stack>

        <Stack
          rowGap={"16px"}
          width={"100%"}
          sx={{ paddingX: { xs: "0", lg: "36px" } }}
        >
          <FormControl fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput
              id="email"
              name="email"
              type="email"
              placeholder="name@company.com"
              // value={inputs.job_title}
              // onChange={handleChange}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              name="password"
              type="password"
              placeholder="Create password"
              // value={inputs.job_title}
              // onChange={handleChange}
            />
          </FormControl>
          <Link
            component={RouterLink}
            to="/forgot-password"
            sx={{
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            Forgot password?
          </Link>
          <Button
            variant="contained"
            endIcon={<EastIcon />}
            size="large"
            fullWidth
            onClick={handleSubmit}
          >
            Next
          </Button>
        </Stack>
        <Divider flexItem sx={{ marginY: "24px" }}>
          <Typography color="secondary.light" variant="subtitle1">
            Or Sign in with
          </Typography>
        </Divider>
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          marginBottom={"32px"}
        >
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              color: "black",
              p: "10px 24px",
              fontSize: "14px",
              borderColor: "#EDEDED",
            }}
            startIcon={
              <Box sx={{ width: "24px" }}>
                <img style={{ objectFit: "cover" }} src={googleIcon}></img>
              </Box>
            }
          >
            Google
          </Button>
        </Box>

        <Stack alignItems={"center"}>
          <Stack direction={"row"} alignItems={"center"} columnGap={"4px"}>
            <Typography variant="body2">Don't have an account yet?</Typography>

            <Link
              component={RouterLink}
              to="/register"
              sx={{
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Sign up
            </Link>
            {/* <Link
              component={RouterLink}
              to="register"
              sx={{
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
             Log in to Other Account
            </Link> */}
          </Stack>
          <Stack direction={"row"} textAlign={"center"} columnGap={"4px"}>
            <Typography variant="body2">Can't log in?</Typography>
            <Link
              component={RouterLink}
              to="help-center"
              sx={{
                textDecoration: "none",
                fontSize: "14px",
              }}
            >
              Visit our help center
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Login;
