import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import { useAppDispatch } from "../../../hooks";
import { addAction } from "../../../features/project/projectSlice";
import { Box } from "@mui/material";
const ActionButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: "16px",
  padding: "10px",
  border: "none",
  lineHeight: 1,
  backgroundColor: "#EDEDED",
  color: "#191919",

  "&:hover": {
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
  },
  "&:focus": {
    boxShadow: "none",
  },
});

type Props = {
  openFeedbackModal: () => void;
  handleActionForDrawer?: () => void;
  data: ProfileData;
  action?: PipelineLabel;
};

const FeedbackBtns = ({
  openFeedbackModal,
  action,
  data,
  handleActionForDrawer,
}: Props) => {
  const dispatch = useAppDispatch();
  const handleAction = (label: PipelineLabel) => {
    dispatch(addAction({ ...data, label }));
    if (handleActionForDrawer) handleActionForDrawer();
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: { xs: "start", lg: "center" },
        gap: "8px",
      }}
    >
      <ActionButton
        variant="contained"
        className={action === "good" ? "active" : ""}
        sx={{ "&:hover, &.active, &:focus": { background: "#DCFCE7" } }}
        onClick={() => handleAction("good")}
      >
        Good
      </ActionButton>
      <ActionButton
        variant="contained"
        className={action === "maybe" ? "active" : ""}
        sx={{ "&:hover, &.active, &:focus": { background: "#FEF9C3" } }}
        onClick={() => handleAction("maybe")}
      >
        Not Sure
      </ActionButton>
      <ActionButton
        style={{ cursor: "pointer" }}
        variant="contained"
        className={action === "not good" ? "active" : ""}
        sx={{ "&:hover, &.active, &:focus": { background: "#FEE2E2" } }}
        onClick={() => {
          openFeedbackModal();
          handleAction("not good");
        }}
      >
        Not Good
      </ActionButton>
    </Box>
  );
};
export default FeedbackBtns;
