import { Button } from "@mui/material";
import { Check, VisibilityOffOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

type Props = {
  variant?: "save" | "hide";
  handleCancel: () => void;
};
const Action = ({ variant = "save", handleCancel }: Props) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        backgroundColor: "#fff",
        borderBottom: "1px solid #ededed",
        display: "flex",
        flexDirection: "row",
        padding: "0rem 1.5rem 1.5rem",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      {/* <img
        style={{
          position: "relative",
          width: "1.25rem",
          height: "1.25rem",
          overflow: "hidden",
          flexShrink: "0",
        }}
        alt=""
        src={tickIcon}
      /> */}
      {variant === "save" ? <Check /> : <VisibilityOffOutlined />}
      <div
        style={{
          alignSelf: "stretch",
          flex: "1",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {variant === "save" ? (
          <div
            style={{
              position: "relative",
              fontWeight: "600",
            }}
          >
            <span>{`Yoss Maman was saved to `}</span>
            <Link to="/pipeline" style={{ color: "#0a66c2" }}>
              Pipeline
            </Link>
          </div>
        ) : (
          <div
            style={{
              position: "relative",
              fontWeight: "600",
            }}
          >
            <span>{`Yoss Maman doesn't fit to your project `}</span>
          </div>
        )}
        <Button variant="text" color="primary" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};
export default Action;
