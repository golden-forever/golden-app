import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useNavigate } from "react-router-dom";
import Typewriter from "../common/Typewriter";
import { useState } from "react";
import Scrollbar from "../common/scrollbar/Scrollbar";
import { BottomBar } from "../layouts";

type Props = {
  setSelected: () => void;
};
const SingleJob = ({ setSelected }: Props) => {
  const { job_info, company_info } = useAppSelector(store => store.user);
  const [finishedAnimations, setFinishedAnimations] = useState({
    title: false,
    location: false,
    description: false,
  });
  const { profiles } = useAppSelector(store => store.project);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/search-results");
  };
  const dispatch = useAppDispatch();
  const finishAnimation = (name: "title" | "location" | "description") =>
    setFinishedAnimations({ ...finishedAnimations, [name]: true });
  return (
    <>
      <Box
        width={"60%"}
        m={"0 auto"}
        maxWidth={"650px"}
        sx={{
          paddingX: { xs: "16px", lg: "0" },
          width: { xs: "100%", lg: "60%" },
        }}
      >
        <Typography variant="h3" textAlign={"center"} marginBottom={"32px"}>
          {company_info?.name}
        </Typography>
        <Box
          sx={{
            alignSelf: "stretch",
            flex: "1",
            // width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "2rem",
            textAlign: "left",
            fontSize: "0.88rem",
            color: "#666",
          }}
        >
          <Box
            sx={{
              alignSelf: "stretch",
              flex: "1",
              borderTop: { xs: "none", md: "1px solid" },

              borderBottom: { xs: "none", md: "1px solid" },
              borderColor: { md: "secondary.light" },
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              padding: "1.5rem 0 0 0",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "1.5rem",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "0.5rem",
              }}
            >
              <h4
                style={{
                  margin: "0",
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "inherit",
                  fontWeight: "600",
                  fontFamily: "inherit",
                }}
              >
                {" "}
                Job Title
              </h4>
              <div
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  color: "#191919",
                }}
              >
                <Typewriter
                  text={job_info?.job_title || ""}
                  delay={50}
                  setFinished={() => finishAnimation("title")}
                />
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "0.5rem",
              }}
            >
              <h4
                style={{
                  margin: "0",
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "inherit",
                  fontWeight: "600",
                  fontFamily: "inherit",
                }}
              >
                Location
              </h4>
              <div
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  color: "#191919",
                }}
              >
                {finishedAnimations.title && (
                  <Typewriter
                    text={job_info?.job_location || "N/A"}
                    delay={50}
                    setFinished={() => finishAnimation("location")}
                  />
                )}
              </div>
            </div>

            <Box
              sx={{
                alignSelf: "stretch",
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "0.5rem",
              }}
            >
              <h4
                style={{
                  margin: "0",
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "inherit",
                  fontWeight: "600",
                  fontFamily: "inherit",
                }}
              >
                Job Description
              </h4>
              <Scrollbar sx={{ height: "270px" }}>
                <div
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "140.2%",
                    color: "#191919",
                  }}
                >
                  <p style={{ whiteSpace: "pre-line" }}>
                    {finishedAnimations.location && (
                      <Typewriter
                        text={job_info?.job_description || ""}
                        delay={10}
                        setFinished={() => finishAnimation("description")}
                      />
                    )}
                  </p>
                </div>
              </Scrollbar>
            </Box>
          </Box>
          <Box
            component={"footer"}
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              display: { xs: "none", md: "flex" },

              color: "#666",
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={setSelected}
              sx={{ boxSizing: "border-box" }}
            >
              Edit
            </Button>
            <Button variant="contained" onClick={handleNavigate}>
              See Results {`(${profiles.length})`}
            </Button>
          </Box>
        </Box>
      </Box>
      <BottomBar
        btnLeftText="Edit"
        btnRightText={`See Results (${profiles.length})`}
        onLeftBtnClick={setSelected}
        onRightBtnClick={handleNavigate}
      />
    </>
  );
};
export default SingleJob;
