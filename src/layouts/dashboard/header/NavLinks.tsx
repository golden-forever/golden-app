import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

type Props = {};
const NavLinks = (props: Props) => {
  const config = [
    {
      title: "Job Description",
      path: "/",
    },
    {
      title: "Search Results (67)",
      path: "/search-results",
    },
    {
      title: "Pipeline (23)",
      path: "/pipeline",
    },
  ];
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
