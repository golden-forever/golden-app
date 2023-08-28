import { FunctionComponent } from "react";
import { Icon, IconButton, Button } from "@mui/material";

type ModalNoJobFoundType = {
  onClose?: () => void;
};

const ModalNoJobFound: FunctionComponent<ModalNoJobFoundType> = ({
  onClose,
}) => {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: "8px",
        backgroundColor: "#fff",
        width: "412px",
        display: "flex",
        flexDirection: "column",
        padding: "32px 32px 24px",
        boxSizing: "border-box",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "32px",
        maxWidth: "100%",
        maxHeight: "100%",
        overflow: "auto",
        textAlign: "center",
        fontSize: "24px",
        color: "#191919",
        fontFamily: "'Noto Sans'",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "0",
        }}
      >
        <div
          style={{
            borderRadius: "700px",
            backgroundColor: "#fafafa",
            display: "flex",
            flexDirection: "row",
            padding: "24px",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <img
            style={{
              position: "relative",
              width: "42px",
              height: "42px",
              overflow: "hidden",
              flexShrink: "0",
              objectFit: "cover",
            }}
            alt=""
            src="/image@2x.png"
          />
        </div>
      </div>
      <IconButton
        style={{
          position: "absolute",
          margin: "0",
          top: "32px",
          left: "364px",
          zIndex: "1",
        }}
        color="primary"
      />
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "16px",
          zIndex: "2",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            fontWeight: "600",
          }}
        >
          <p style={{ margin: "0" }}>We did find any job posting</p>
          <p style={{ margin: "0" }}>from Techify</p>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            fontSize: "16px",
            color: "#666",
          }}
        >
          Please copy and paste your job posting here and we will find you
          candidates.
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          borderTop: "1px solid #ededed",
          display: "flex",
          flexDirection: "row",
          padding: "16px 0px 0px",
          alignItems: "center",
          justifyContent: "center",
          zIndex: "3",
        }}
      >
        <Button variant="text" color="primary">
          Add info
        </Button>
      </div>
    </div>
  );
};

export default ModalNoJobFound;
