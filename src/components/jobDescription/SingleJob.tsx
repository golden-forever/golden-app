import { Box, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useNavigate } from "react-router-dom";
import Typewriter from "../common/Typewriter";
import { useState } from "react";

type Props = {
  setSelected?: () => void;
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
    <Box width={"500px"} m={"0 auto"}>
      <div
        style={{
          alignSelf: "stretch",
          position: "relative",
          fontWeight: "600",
        }}
      >
        {company_info?.company_name}
      </div>
      <div
        style={{
          alignSelf: "stretch",
          flex: "1",
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
        <div
          style={{
            alignSelf: "stretch",
            flex: "1",
            borderTop: "1px solid #ededed",
            borderBottom: "1px solid #ededed",
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            padding: "1.5rem 0rem",
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
              \{" "}
            </div>
          </div>
          <div
            style={{
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
          </div>
        </div>
        <footer
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "left",
            fontSize: "1rem",
            color: "#666",
            fontFamily: "'Noto Sans'",
          }}
        >
          <Button variant="outlined" color="primary" onClick={setSelected}>
            Edit
          </Button>
          <Button variant="contained" color="primary" onClick={handleNavigate}>
            See Results {`(${profiles.length})`}
          </Button>
        </footer>
      </div>
    </Box>
  );
};
export default SingleJob;
