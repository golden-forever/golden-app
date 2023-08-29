import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
const ActionButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "10px",
  border: "none",
  lineHeight: 1.5,
  backgroundColor: "#EDEDED",
  color: "#191919",

  "&:hover": {
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

type Props = {
  openFeedbackModal: () => void;
};
const FeedbackBtns = ({ openFeedbackModal }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
      }}
    >
      <ActionButton
        variant="contained"
        sx={{ "&:hover, &:active, &:focus": { background: "#DCFCE7" } }}
      >
        Good
      </ActionButton>
      <ActionButton
        variant="contained"
        sx={{ "&:hover, &:active, &:focus": { background: "#FEF9C3" } }}
      >
        Not Sure
      </ActionButton>
      <ActionButton
        style={{ cursor: "pointer" }}
        variant="contained"
        sx={{ "&:hover, &:active, &:focus": { background: "#FEE2E2" } }}
        onClick={openFeedbackModal}
      >
        Not Good
      </ActionButton>
    </div>
  );
};
export default FeedbackBtns;
