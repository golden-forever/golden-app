import { Button } from "@mui/material";

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
      <Button variant="contained" color="primary">
        Good
      </Button>
      <Button variant="contained" color="primary">
        Not Sure
      </Button>
      <Button
        style={{ cursor: "pointer" }}
        variant="contained"
        color="primary"
        onClick={openFeedbackModal}
      >
        Not Good
      </Button>
    </div>
  );
};
export default FeedbackBtns;
