import { FunctionComponent, useState } from "react";
import { TextField, Button, Icon, IconButton } from "@mui/material";
import ModalNoJobFound from "./ModalNoJobFound";
import PortalPopup from "./PortalPopup";
import Property1Primary from "./Property1Primary";

type ModalSelectCompanyType = {
  onClose?: () => void;
};

const ModalSelectCompany: FunctionComponent<ModalSelectCompanyType> = ({
  onClose,
}) => {
  const [isModalNoJobFoundPopupOpen, setModalNoJobFoundPopupOpen] =
    useState(false);

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
        gap: "32px",
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
        <div style={{ position: "relative", fontWeight: "600" }}>
          Select your company to get started
        </div>
        <div
          style={{
            alignSelf: "stretch",
            position: "relative",
            fontSize: "16px",
            color: "#666",
          }}
        >
          Start typing the company name to select
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "4px",
          zIndex: "1",
          fontSize: "16px",
          color: "#0a66c2",
        }}
      >
        <TextField
          style={{
            border: "none",
            backgroundColor: "transparent",
            alignSelf: "stretch",
          }}
          variant="outlined"
          label="Tech|"
        />
        <div
          style={{
            alignSelf: "stretch",
            borderRadius: "6px",
            backgroundColor: "#fff",
            boxShadow:
              "0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
            border: "1px solid #ededed",
            display: "flex",
            flexDirection: "column",
            padding: "8px 0px",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "4px",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "row",
              padding: "12px",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: "16px",
            }}
          >
            <img
              style={{
                position: "relative",
                borderRadius: "2px",
                width: "24px",
                height: "24px",
                overflow: "hidden",
                flexShrink: "0",
                objectFit: "cover",
              }}
              alt=""
              src="/frame-37308@2x.png"
            />
            <div style={{ position: "relative" }}>
              <span>Tech</span>
              <span style={{ color: "#191919" }}>ify.com</span>
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
              gap: "16px",
            }}
          >
            <img
              style={{
                position: "relative",
                borderRadius: "2px",
                width: "24px",
                height: "24px",
                overflow: "hidden",
                flexShrink: "0",
                objectFit: "cover",
              }}
              alt=""
              src="/frame-373081@2x.png"
            />
            <div style={{ position: "relative" }}>
              <span>Tech</span>
              <span style={{ color: "#191919" }}>tronix.com</span>
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
              gap: "16px",
            }}
          >
            <img
              style={{
                position: "relative",
                borderRadius: "2px",
                width: "24px",
                height: "24px",
                overflow: "hidden",
                flexShrink: "0",
                objectFit: "cover",
              }}
              alt=""
              src="/frame-373082@2x.png"
            />
            <div style={{ position: "relative" }}>
              <span>Tech</span>
              <span style={{ color: "#191919" }}>Vista.com</span>
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
              gap: "16px",
            }}
          >
            <img
              style={{
                position: "relative",
                borderRadius: "2px",
                width: "24px",
                height: "24px",
                overflow: "hidden",
                flexShrink: "0",
                objectFit: "cover",
              }}
              alt=""
              src="/frame-373083@2x.png"
            />
            <div style={{ position: "relative" }}>
              <span>Tech</span>
              <span style={{ color: "#191919" }}>Nova.com</span>
            </div>
          </div>
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
          justifyContent: "flex-end",
          zIndex: "2",
        }}
      >
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
          property1PrimaryOpacity="0.5"
          property1PrimaryCursor="pointer"
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

export default ModalSelectCompany;
