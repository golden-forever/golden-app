import { Box, Button } from "@mui/material";
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
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        marginLeft: "-7px",
      }}
    >
      <NavLink
        to={`/job/${recent_pid}`}
        style={({ isActive, isPending }) => {
          return {
            position: "relative",
            padding: "12px 10px",
            margin: "0 24px 0 0",
            fontWeight: location.pathname.startsWith("/job") ? "bold" : "",
            color: location.pathname.startsWith("/job")
              ? "white"
              : "rgba(237, 237, 237, 0.3)",
            borderBottom: location.pathname.startsWith("/job")
              ? "2px solid white"
              : "",
          };
        }}
      >
        <span>Job Description</span>
      </NavLink>
      {config.map((page, i) => (
        <NavLink
          to={page.path}
          key={i}
          style={({ isActive, isPending }) => {
            return {
              position: "relative",
              padding: "12px 10px",
              margin: "0 24px 0 0",
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "white" : "rgba(237, 237, 237, 0.3)",
              borderBottom: isActive ? "2px solid white" : "",
            };
          }}
        >
          <span>{page.title}</span>
        </NavLink>
      ))}
    </Box>
  );
};
export default NavLinks;
