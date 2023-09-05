import { Button } from "@mui/material";
import { Check, VisibilityOffOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { cancelAction } from "../../features/project/projectSlice";
import UndoIcon from "@mui/icons-material/Undo";
type Props = {
  action: ProfileData;
};
const Action = ({ action }: Props) => {
  const dispatch = useAppDispatch();
  const handleCancel = () => {
    dispatch(cancelAction(action));
  };
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
      {action.label !== "not good" ? <Check /> : <VisibilityOffOutlined />}
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
        {action.label !== "not good" ? (
          <div
            style={{
              position: "relative",
              fontWeight: "600",
            }}
          >
            <span>{`${action.first_name} ${action.last_name} was saved to `}</span>
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
            <span>{`${action.first_name} ${action.last_name} doesn't fit to your project `}</span>
          </div>
        )}
        <Button
          variant="text"
          color="secondary"
          endIcon={<UndoIcon />}
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};
export default Action;
