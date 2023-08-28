import { Box, Button, Divider, Slider } from "@mui/material";
import NavLink from "./NavLink";
import Logo from "./Logo";
import { useState } from "react";
import { Add } from "@mui/icons-material";
const mockData = [
  { jobTitle: "Product Team Lead" },
  { jobTitle: "QA Engineer" },
  { jobTitle: "CFU" },
];

type Props = {};
const OpenJobs = (props: Props) => {
  const [selected, setSelected] = useState(mockData[1]);

  return (
    <>
      <Box sx={{ px: 2.5, display: "inline-flex" }}>
        <Logo />
      </Box>
      <Divider sx={{ width: "90%", margin: "24px auto" }} />
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "1rem",
          fontSize: "1rem",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            padding: "0rem 0rem 0rem 1.75rem",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div style={{ flex: "1", position: "relative", fontWeight: "600" }}>
            Open positions
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "0.38rem",
          }}
        >
          {mockData.map(position => (
            <NavLink
              title={position.jobTitle}
              isActive={position.jobTitle === selected.jobTitle}
              handleClick={() => setSelected(position)}
            />
          ))}
        </div>
      </div>
      <Divider sx={{ width: "90%", margin: "24px auto" }} />
      <Button
        variant="text"
        fullWidth
        startIcon={<Add />}
        sx={{
          display: "flex",
          transition: "opacity 0.3s ease 0s",
          position: "relative",
          justifyContent: "start",
          alignItems: "center",
          p: "5px 28px",
          borderRadius: 0,
          "& .MuiButton-startIcon": { marginRight: "4px" },
        }}
        // onClick={handleClose}
      >
        Create a new job
      </Button>
    </>
  );
};
export default OpenJobs;
