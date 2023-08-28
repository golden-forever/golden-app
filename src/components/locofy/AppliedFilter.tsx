import { FunctionComponent } from "react";
import { Icon, IconButton } from "@mui/material";

type AppliedFilterType = {
  topic?: string;
};

const AppliedFilter: FunctionComponent<AppliedFilterType> = ({ topic }) => {
  return (
    <div
      style={{
        borderRadius: "100px",
        backgroundColor: "#caedff",
        display: "flex",
        flexDirection: "row",
        padding: "0.25rem 0.5rem 0.25rem 0.63rem",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.13rem",
        textAlign: "left",
        fontSize: "0.88rem",
        color: "#191919",
        fontFamily: "'Noto Sans'",
      }}
    >
      <div style={{ position: "relative" }}>{topic}</div>
      <IconButton style={{ position: "relative" }} color="primary" />
    </div>
  );
};

export default AppliedFilter;
