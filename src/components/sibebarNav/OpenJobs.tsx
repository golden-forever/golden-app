import {
  Box,
  Button,
  Collapse,
  Divider,
  Slider,
  Tooltip,
  Typography,
} from "@mui/material";
import NavLink from "./NavLink";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { Add, BorderColor } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { getProject, setIsMobileSidebar } from "../../features/user/userSlice";
import { getImgSrc } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
// Top Bar sizes
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

type Props = { toggleMobileSidebar: () => void };
const OpenJobs = ({ toggleMobileSidebar }: Props) => {
  const { project_snippets, company_info, recent_pid, isMobileSidebar } =
    useAppSelector(state => state.user);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const handleJobSelect = (project_id: string) => {
    dispatch(getProject(project_id));
    dispatch(setIsMobileSidebar(false));
    navigate(`/job/${project_id}`);
  };
  const logo = company_info?.company_logo_url
    ? company_info.company_logo_url
    : getImgSrc(company_info?.company_id || "placeholder");

  const handleCreateNewClick = () => {
    navigate("/job/new-job");
  };
  const toggleSideBar = () => {
    dispatch(setIsMobileSidebar(!isMobileSidebar));
  };
  return (
    <>
      <Box
        sx={{
          display: "inline-flex",
          width: "100%",
          alignItems: "center",
          p: { xs: "11.5px 18px", lg: "0 28px" },
          borderBottom: { xs: "1px solid", lg: "0" },
          borderColor: "secondary.light",
        }}
      >
        <Logo image={logo} company={company_info?.name} />
        <Box
          height={"16px"}
          bgcolor={"secondary.main"}
          width={"1px"}
          marginX={"8px"}
          sx={{ display: { lg: "none" } }}
        />
        <Button
          endIcon={<KeyboardArrowDownIcon />}
          onClick={toggleSideBar}
          size="small"
          sx={{
            p: "0",
            color: "secondary.darker",
            fontSize: "16px",
            fontWeight: "500",
            ":hover": { background: "none" },
            "& .MuiButton-endIcon": { marginLeft: "2px" },
            display: { lg: "none" },
          }}
        >
          3 open jobs
        </Button>
      </Box>
      <Collapse in={isDesktop || isMobileSidebar}>
        <Box
          sx={{
            height: "100%",
          }}
        >
          {" "}
          <Divider
            sx={{
              display: { xs: "none", lg: "block" },
              width: "90%",
              margin: "24px auto",
              borderColor: "secondary.light",
            }}
          />
          <Box
            sx={{
              marginTop: { xs: "24px", lg: "0" },
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
              <Typography variant="h3">Open positions</Typography>
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
                  handleClick={() => handleJobSelect(snippet.project_id)}
                />
              ))}
            </div>
          </Box>
          {/* <Divider sx={{ width: "90%", margin: "24px auto", color: "#EDEDED" }} /> */}
          <Divider
            sx={{
              width: "90%",
              margin: "24px auto",
              borderColor: "secondary.light",
            }}
          />
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
        </Box>
      </Collapse>
    </>
  );
};
export default OpenJobs;
