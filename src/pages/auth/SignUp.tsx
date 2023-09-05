import { FunctionComponent, useCallback } from "react";
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
import searchResImg from "../../assets/search-results.png";
import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
const SignUp: FunctionComponent = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <Box
      component={"main"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        width: "100vw",
        minHeight: "100vh",
        overflow: "hidden",
        p: 0,
      }}
    >
      <Grid width={"100%"} container>
        <Grid
          item
          xs={12}
          lg={7}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "100vh",
            paddingX: "16px",

            paddingBottom: { xs: "64px", lg: "57px" },
          }}
        >
          {/* Placeholder */}

          <div />
          <Box marginBottom={"32px"}>
            <Stack rowGap={"32px"}>
              <Stack rowGap={"8px"} textAlign={"center"}>
                <Typography variant="h2">Welcome to Golden</Typography>
                <Typography color="secondary">
                  Get started - it's free. No credit card needed.
                </Typography>
              </Stack>
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                sx={{
                  color: "black",
                  p: "10px 23px",
                  fontSize: "14px",
                  borderColor: "#EDEDED",
                }}
                startIcon={
                  <Box sx={{ width: "24px" }}>
                    <img style={{ objectFit: "cover" }} src={googleIcon}></img>
                  </Box>
                }
              >
                Continue with Google work account
              </Button>
            </Stack>
            <Divider flexItem sx={{ marginY: "24px" }}>
              <Typography color="secondary.light" variant="subtitle1">
                or
              </Typography>
            </Divider>
            <Stack rowGap={"16px"} marginBottom={"32px"}>
              <FormControl fullWidth>
                <InputLabel
                  // shrink={true}
                  htmlFor="email"
                  // sx={{ transform: "translate(0, -110%)", fontSize: "14px" }}
                >
                  Company email
                </InputLabel>
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
                <InputLabel
                  // shrink={true}
                  htmlFor="password"
                >
                  Password
                </InputLabel>
                <OutlinedInput
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Create password"
                  // value={inputs.job_title}
                  // onChange={handleChange}
                />
              </FormControl>
              <Button
                variant="contained"
                size="large"
                fullWidth
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
            </Stack>
            <Typography
              variant="body2"
              width={"233px"}
              m={"0 auto"}
              textAlign={"center"}
            >
              By proceeding, you agree to the{" "}
              <Link href={"#"} sx={{ textDecoration: "none" }}>
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href={"#"} sx={{ textDecoration: "none" }}>
                Privacy Policy
              </Link>
            </Typography>
          </Box>
          <Stack direction={"row"} alignItems={"center"} columnGap={"6px"}>
            <Typography>Already a user?</Typography>
            <RouterLink
              to={"/login"}
              style={{ color: "#0A66C2", fontWeight: "bold" }}
            >
              Log in
            </RouterLink>
          </Stack>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            position: "relative",
            p: "10vh 34px",
            width: "40%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            minHeight: "100vh",
            background: "#0A66C2",
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          <Stack rowGap={"16px"} alignItems={"center"}>
            <Stack columnGap={"16px"} direction={"row"} alignItems={"center"}>
              <Box
                width={"32px"}
                height={"2px"}
                borderRadius={"10px"}
                bgcolor={"white"}
              ></Box>
              <Typography variant="h2" color={"white"}>
                Your Recruitment Loyal Companion.
              </Typography>
            </Stack>
            <Typography
              color="rgba(237, 243, 248, 0.8)"
              width={"100%"}
              paddingLeft={"24px"}
            >
              No more manual searches, no more settling for less. With Golden,
              every candidate is a potential gem, waiting to be discovered.
            </Typography>
          </Stack>
          <Box
            position={"absolute"}
            top={"55%"}
            left="0"
            sx={{ transform: "translate(15%, -20%)" }}
          >
            <Box position={"relative"}>
              <Box position={"absolute"} width={"50%"} height={"70%"}>
                <Box
                  position={"absolute"}
                  width={"110%"}
                  height={"110%"}
                  sx={{
                    border: "2px dashed #50ACFF",
                    borderBottom: "none",
                    borderRight: "none",
                    borderRadius: "32px",
                    outlineOffset: "20px",
                    transform: {
                      lg: "translate(-10%, -10%)",
                      xl: "translate(-7%, -7%)",
                    },
                  }}
                />
                <Box
                  position={"absolute"}
                  bottom={"0"}
                  left="0"
                  sx={{ transform: "translate(-55%, 50%)" }}
                >
                  <img src={user1} alt="" />
                </Box>
                <Box
                  position={"absolute"}
                  top={"0"}
                  right="0"
                  sx={{ transform: "translate(50%, -60%)" }}
                >
                  <img src={user2} alt="" />
                </Box>
              </Box>
              <img src={searchResImg} alt="" style={{ objectFit: "cover" }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SignUp;
