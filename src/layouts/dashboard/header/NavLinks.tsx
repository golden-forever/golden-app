import { Box, Button, Link } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import { useEffect, useState } from "react";

type Props = {};
const NavLinks = (props: Props) => {
  const { recent_pid } = useAppSelector(store => store.user);

  const { profiles, pipelineTotal } = useAppSelector(store => store.project);

  const location = useLocation();

  const [config, setConfig] = useState([
    {
      title: `Search Results` + ` (${profiles.length})`,
      path: "/search-results",
    },
    {
      title: "Pipeline" + ` (${pipelineTotal})`,
      path: "/pipeline",
    },
  ]);
  useEffect(() => {
    setConfig([
      {
        title: `Search Results` + ` (${profiles.length})`,
        path: "/search-results",
      },
      {
        title: "Pipeline" + ` (${pipelineTotal})`,
        path: "/pipeline",
      },
    ]);
  }, [profiles, pipelineTotal]);
  return (
    <Box
      sx={{
        paddingX: { xs: "30px", sm: "24px", lg: "24px" },

        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: { xs: "space-between", sm: "flex-start" },

        paddingBottom: "1px",
        columnGap: { sm: "32px", lg: "44px" },
        "& .nav-link": {
          "& .underline": {
            backgroundColor: "rgb(255, 255, 255)",
            borderRadius: "50px",
            width: "100%",
            height: "2px",
            display: "none",
          },
          "& span": {
            padding: "11px 0",

            whiteSpace: "nowrap",
            fontWeight: "600",
            "&.btn-text": { display: "block" },
          },

          "&.active": {
            "& .underline": { display: "block" },
            "& span": { padding: "11px 0 9px 0" },
          },
        },
      }}
    >
      <NavLink
        to={`/job/${recent_pid}`}
        className={`nav-link ${
          location.pathname.startsWith("/job") ? "active" : ""
        }`}
        style={({ isActive, isPending }) => {
          return {
            position: "relative",
            color: location.pathname.startsWith("/job")
              ? "white"
              : "rgba(237, 237, 237, 0.3)",
          };
        }}
      >
        <Box
          component={"span"}
          sx={{
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        >
          Job Description
        </Box>
        <Box
          component={"span"}
          sx={{
            display: {
              xs: "block",
              lg: "none",
            },
          }}
        >
          Job info
        </Box>
        <Box className={"underline"} />
      </NavLink>
      {config.map((page, i) => (
        <NavLink
          to={page.path}
          className={"nav-link"}
          key={i}
          style={({ isActive, isPending }) => {
            return {
              position: "relative",
              whiteSpace: "nowrap",
              color: isActive ? "white" : "rgba(237, 237, 237, 0.3)",
            };
          }}
        >
          <Box component={"span"} className={"btn-text"}>
            {page.title}
          </Box>
          <Box className="underline" />
        </NavLink>
      ))}
    </Box>
  );
};
export default NavLinks;
