import { Box, Button, Divider, Slider } from "@mui/material";
import NavLink from "./NavLink";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { Add } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../hooks";

import { getProject } from "../../features/user/userSlice";
import { getImgSrc } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";

type Props = {};
const OpenJobs = (props: Props) => {
  const { project_snippets, company_info, recent_pid } = useAppSelector(
    state => state.user
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleJobSelect = (project_id: string) => {
    dispatch(getProject(project_id));
  };
  const logo = company_info?.company_logo_url
    ? company_info.company_logo_url
    : getImgSrc(company_info?.company_id || "placeholder");

  const handleCreateNewClick = () => {
    navigate("/job/new-job");
  };
  const handleProjectClick = (project_id: string) => {
    navigate(`/job/${project_id}`);
  };

  return (
    <>
      <Box sx={{ px: 2.5, display: "inline-flex" }}>
        <Logo image={logo} company={company_info?.company_name} />
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
          {project_snippets?.map((snippet, i) => (
            <NavLink
              key={i}
              title={snippet.project_title}
              isActive={snippet.project_id === recent_pid}
              handleClick={() => {
                handleJobSelect(snippet.project_id);
                navigate(`/job/${snippet.project_id}`);
              }}
            />
          ))}
        </div>
      </div>
      <Divider sx={{ width: "90%", margin: "24px auto" }} />

      <Button
        variant="text"
        fullWidth
        onClick={handleCreateNewClick}
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
