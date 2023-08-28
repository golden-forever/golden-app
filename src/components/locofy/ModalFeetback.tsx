import { FunctionComponent } from "react";
import { TextField, Button, Icon, IconButton } from "@mui/material";
import Input from "./Input";
import Property1Outline from "./Property1Outline";
import Property1Primary from "./Property1Primary";

type ModalFeetbackType = {
  onClose?: () => void;
};

const ModalFeetback: FunctionComponent<ModalFeetbackType> = ({ onClose }) => {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: "8px",
        backgroundColor: "#fff",
        width: "551px",
        display: "flex",
        flexDirection: "column",
        padding: "32px 32px 24px",
        boxSizing: "border-box",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "24px",
        maxWidth: "100%",
        maxHeight: "100%",
        overflow: "auto",
        textAlign: "left",
        fontSize: "24px",
        color: "#191919",
        fontFamily: "'Noto Sans'",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "12px",
          zIndex: "0",
        }}
      >
        <div style={{ position: "relative", fontWeight: "600" }}>Feedback</div>
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            fontSize: "16px",
            color: "#666",
          }}
        >
          For system to avoid such profiles, please state why you declined
          profile (this is private)
        </div>
      </div>
      <Input
        content="Text Description"
        descriptionText="/icons6.svg"
        inputPosition="unset"
        inputWidth="unset"
        inputAlignSelf="stretch"
        inputHeight="306px"
        inputZIndex="1"
        inputDisplay="flex"
        inputFlexDirection="column"
        inputAlignItems="flex-start"
        inputJustifyContent="flex-start"
        inputGap="4px"
        frameDivHeight="20px"
        frameDivGap="4px"
        labelCursor="pointer"
        labelGap="2px"
        labelFontSize="14px"
        labelLineHeight="140%"
        labelFontFamily="Jost"
        labelLetterSpacing="0.03em"
        labelFontSize1="14px"
        frameDivPadding="2px"
        iconsWidth="6px"
        iconsHeight="6px"
        frameDivHeight1="unset"
        frameDivDisplay="unset"
        frameDivFlexDirection="unset"
        frameDivAlignItems="unset"
        frameDivJustifyContent="unset"
        frameDivFlex="1"
        frameDivBorder="unset"
        frameDivBackgroundColor="unset"
      />
      <div
        style={{
          alignSelf: "stretch",
          borderTop: "1px solid #ededed",
          display: "flex",
          flexDirection: "row",
          padding: "16px 0px 0px",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "24px",
          zIndex: "2",
        }}
      >
        <Property1Outline
          property1OutlinePosition="unset"
          property1OutlineBorderRadius="unset"
          property1OutlineBorder="unset"
          property1OutlineBoxSizing="unset"
          property1OutlineWidth="unset"
          property1OutlineDisplay="unset"
          property1OutlineFlexDirection="unset"
          property1OutlinePadding="unset"
          property1OutlineAlignItems="unset"
          property1OutlineJustifyContent="unset"
        />
        <Property1Primary
          property1PrimaryPosition="unset"
          property1PrimaryBorderRadius="unset"
          property1PrimaryBackgroundColor="unset"
          property1PrimaryWidth="unset"
          property1PrimaryDisplay="unset"
          property1PrimaryFlexDirection="unset"
          property1PrimaryPadding="unset"
          property1PrimaryBoxSizing="unset"
          property1PrimaryAlignItems="unset"
          property1PrimaryJustifyContent="unset"
          property1PrimaryGap="unset"
          property1PrimaryOpacity="unset"
          property1PrimaryCursor="unset"
        />
      </div>
      <IconButton
        style={{
          position: "absolute",
          margin: "0",
          top: "32px",
          left: "503px",
          zIndex: "3",
        }}
        color="primary"
      />
    </div>
  );
};

export default ModalFeetback;
