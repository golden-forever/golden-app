import { FunctionComponent, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import Containernav from "../components/locofy/Containernav";
import Property1Primary from "../components/locofy/Property1Primary";
import InputContainer from "../components/locofy/InputContainer";
import Input from "../components/locofy/Input";
import SideNavbar from "../components/locofy/SideNavbar";
import { EditJob, SingleJob } from "../components/jobDescription";
import { NoJobModal } from "../components/common";

const JobDescription: FunctionComponent = () => {
  const [isNoJobModal, setIsNoJobModal] = useState(false);
  const [selected, setSelected] = useState(false);
  const toggleNoJob = (open: boolean) => {
    setIsNoJobModal(open);
  };

  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#fff",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      {selected ? (
        <EditJob setSelected={() => setSelected(false)} />
      ) : (
        <SingleJob setSelected={() => setSelected(true)} />
      )}

      <NoJobModal open={isNoJobModal} onClose={() => toggleNoJob(false)} />
    </Box>
  );
};

export default JobDescription;
