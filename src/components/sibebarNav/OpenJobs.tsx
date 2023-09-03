import { Box, Button, Divider, Slider, Typography } from "@mui/material";
import NavLink from "./NavLink";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { Add } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../hooks";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { getProject } from "../../features/user/userSlice";
import { getImgSrc } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
// Top Bar sizes
import {
  APP_BAR_DESKTOP,
  APP_BAR_MOBILE,
  MOBILE_TOP_SIDEBAR,
} from "../../utils/constants";

type Props = {};
const OpenJobs = (props: Props) => {
  const { project_snippets, company_info, recent_pid } = useAppSelector(
    state => state.user
  );
  const [isMobileSidebar, setIsMobileSidebar] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleJobSelect = (project_id: string) => {
    dispatch(getProject(project_id));
    navigate(`/job/${project_id}`);
  };
  const logo = company_info?.company_logo_url
    ? company_info.company_logo_url
    : getImgSrc(company_info?.company_id || "placeholder");

  const handleCreateNewClick = () => {
    navigate("/job/new-job");
  };

  return (
    <>
      {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",

              p: "12px 16px",
            }}
          >
            <Stack direction={"row"}>
              <Logo
                image={company_info?.company_logo_url || ""}
                company={company_info?.company_name}
              />
              <Box
                height={"16px"}
                borderRight={"1px solid"}
                borderColor={"secondary.light"}
                m={"0 8px"}
              />
              <Button
                endIcon={<KeyboardArrowDownIcon />}
                onClick={() => setIsMobileSidebar(!isMobileSidebar)}
                size="small"
                sx={{
                  p: "0",
                  color: "secondary.darker",
                  fontSize: "16px",
                  fontWeight: "500",
                  ":hover": { background: "none" },
                  "& .MuiButton-endIcon": { marginLeft: "2px" },
                }}
              >
                3 open jobs
              </Button>
            </Stack>
          </Box> */}
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          p: { xs: "12px 18px", lg: "0 28px" },
        }}
      >
        <Logo image={logo} company={company_info?.company_name} />
        <Box
          height={"16px"}
          bgcolor={"secondary.light"}
          width={"1px"}
          marginX={"8px"}
          sx={{ display: { lg: "none" } }}
        />
        <Button
          endIcon={<KeyboardArrowDownIcon />}
          onClick={() => setIsMobileSidebar(!isMobileSidebar)}
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

      <Box
        sx={{
          display: { xs: isMobileSidebar ? "block" : "none", lg: "block" },
          height: `calc(100vh - ${APP_BAR_MOBILE + MOBILE_TOP_SIDEBAR}px)`,
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
    </>
  );
};
export default OpenJobs;
