import { FunctionComponent } from "react";
import { TextField, Button } from "@mui/material";
import InputContainer from "../locofy/InputContainer";
import Input from "../locofy/Input";
type Props = {
  setSelected: () => void;
};

const EditJob = ({ setSelected }: Props) => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "32px",
        textAlign: "center",
        fontSize: "24px",
        color: "#191919",
        fontFamily: "'Noto Sans'",
      }}
    >
      <h2
        style={{
          margin: "0",
          alignSelf: "stretch",
          position: "relative",
          fontSize: "inherit",
          fontWeight: "600",
          fontFamily: "inherit",
        }}
      >
        Product manag
      </h2>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "32px",
          textAlign: "left",
          fontSize: "16px",
          color: "#0a66c2",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            borderTop: "1px solid #ededed",
            borderBottom: "1px solid #ededed",
            display: "flex",
            flexDirection: "column",
            padding: "24px 0px",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "16px",
          }}
        >
          <InputContainer
            jobDescriptionInput=" Job Title"
            jobDescriptionPlaceholder="Product manag|"
            propHeight="unset"
            propFlex="unset"
          />
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "4px",
              position: "relative",
            }}
          >
            <Input
              content="Location"
              inputPosition="unset"
              inputWidth="unset"
              inputAlignSelf="stretch"
              inputHeight="unset"
              inputZIndex="unset"
              inputDisplay="unset"
              inputFlexDirection="unset"
              inputAlignItems="unset"
              inputJustifyContent="unset"
              inputGap="unset"
              frameDivHeight="20px"
              frameDivGap="4px"
              labelCursor="pointer"
              labelGap="2px"
              labelFontSize="14px"
              labelLineHeight="13px"
              labelFontFamily="Inter"
              labelLetterSpacing="unset"
              labelFontSize1="14px"
              frameDivPadding="2px"
              iconsWidth="6px"
              iconsHeight="6px"
              frameDivHeight1="unset"
              frameDivDisplay="unset"
              frameDivFlexDirection="unset"
              frameDivAlignItems="unset"
              frameDivJustifyContent="unset"
              frameDivFlex="unset"
              frameDivBorder="none"
              frameDivBackgroundColor="transparent"
            />
            <div style={{ alignSelf: "stretch" }}>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  padding: "12px",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <div style={{ position: "relative" }}>
                  <span>Tel</span>
                  <span style={{ color: "#191919" }}>šiai</span>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  backgroundColor: "#f5f5f5",
                  display: "flex",
                  flexDirection: "row",
                  padding: "12px",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <div style={{ position: "relative" }}>
                  <span>{`Tel `}</span>
                  <span style={{ color: "#191919" }}>Aviv</span>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  padding: "12px",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <div style={{ position: "relative" }}>
                  <span>Tel</span>
                  <span style={{ color: "#191919" }}>ford</span>
                </div>
              </div>
            </div>
          </div>
          <InputContainer
            jobDescriptionInput="Job Description"
            jobDescriptionPlaceholder="Enter job description"
          />
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#666",
          }}
        >
          <div
            style={{
              display: "none",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                position: "relative",
                letterSpacing: "0.15px",
                lineHeight: "140%",
                fontWeight: "500",
              }}
            >
              Required field
            </div>
            <div
              style={{
                position: "relative",
                letterSpacing: "0.03em",
                lineHeight: "140%",
                fontWeight: "500",
                color: "#1f2937",
                display: "inline-block",
                width: "10px",
                height: "30px",
                flexShrink: "0",
              }}
            >
              *
            </div>
          </div>
          <Button variant="outlined" color="primary" onClick={setSelected}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={setSelected}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditJob;
