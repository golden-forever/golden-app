import { Box, Divider, Button } from "@mui/material";
import NavLink from "./NavLink";
import Logo from "./Logo";
import { useState } from "react";
const mockData = [
  { label: "Good Leads", amount: 68 },
  { label: "Not Sure Leads", amount: 31 },
];
type Props = {};
const SavedJobs = (props: Props) => {
  const [selected, setSelected] = useState(mockData[1]);

  return (
    <>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "1rem",
          fontSize: "1rem",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            padding: "0rem 0rem 0rem 1.75rem",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <div style={{ flex: "1", position: "relative", fontWeight: "600" }}>
            Total saved
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "0.38rem",
          }}
        >
          {mockData.map((option, i) => (
            <Button
              variant="text"
              onClick={() => setSelected(option)}
              className={option.label === selected.label ? "active" : ""}
              key={i}
              fullWidth
              sx={{
                display: "flex",
                transition: "opacity 1s ease 0s",

                position: "relative",
                justifyContent: "space-between",
                alignItems: "center",
                p: "14px 16px 14px 29px",
                color: "black",
                "::after": {
                  content: "''",
                  opacity: 0,
                  transition: "opacity 1s ease 0s",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: "100%",
                  width: "5px",
                  backgroundColor: "primary.main",
                  borderTopRightRadius: "4px",
                  borderBottomRightRadius: "4px",
                },
                "& .MuiButton-endIcon": {
                  transition: "opacity 1s ease 0s",
                  opacity: 0,
                },
                "&.active": {
                  color: "primary.main",
                  "::after": {
                    opacity: 1,
                  },
                },
                ":hover": {
                  background: "transparent",
                  "& .MuiButton-endIcon": { opacity: 1 },
                  "::after": {
                    opacity: 1,
                  },
                },
              }}
            >
              {option.label} <span>{option.amount}</span>
            </Button>
          ))}
          {/* <Button
            variant="text"
            fullWidth
            sx={{
              display: "flex",
              transition: "opacity 1s ease 0s",

              position: "relative",
              justifyContent: "space-between",
              alignItems: "center",
              p: "14px 16px 14px 29px",
              "::after": {
                content: "''",
                opacity: 0,
                transition: "opacity 1s ease 0s",

                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "5px",
                backgroundColor: "primary.main",
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px",
              },
              "& .MuiButton-endIcon": {
                transition: "opacity 1s ease 0s",
                opacity: 0,
              },
              ":hover": {
                background: "transparent",
                "& .MuiButton-endIcon": { opacity: 1 },
                "::after": {
                  opacity: 1,
                },
              },
            }}
          >
            Good leads <span>80</span>
          </Button>
          <Button
            variant="text"
            fullWidth
            sx={{
              display: "flex",
              transition: "opacity 1s ease 0s",

              position: "relative",
              justifyContent: "space-between",
              alignItems: "center",
              p: "14px 16px 14px 29px",
              "::after": {
                content: "''",
                opacity: 0,
                transition: "opacity 1s ease 0s",

                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "5px",
                backgroundColor: "primary.main",
                borderTopRightRadius: "4px",
                borderBottomRightRadius: "4px",
              },
              "& .MuiButton-endIcon": {
                transition: "opacity 1s ease 0s",
                opacity: 0,
              },
              ":hover": {
                background: "transparent",
                "& .MuiButton-endIcon": { opacity: 1 },
                "::after": {
                  opacity: 1,
                },
              },
            }}
          >
            Not Sure Leads<span>22</span>
          </Button> */}
        </div>
      </div>
    </>
  );
};
export default SavedJobs;
