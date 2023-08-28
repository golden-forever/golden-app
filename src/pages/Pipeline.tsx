import { FunctionComponent, useState, useCallback } from "react";

import {
  FeetbackModal,
  ProfileCard,
  ProfileDrawerContent,
} from "../components/common";
import { Box, Drawer } from "@mui/material";
const Pipeline: FunctionComponent = () => {
  const [isProfileDrawer, setIsProfileDrawer] = useState(false);
  const [isFeedbackModal, setIsFeedbackModal] = useState(false);

  const toggleFeedbackModal = (open: boolean) => {
    setIsFeedbackModal(open);
  };
  const toggleDrawer = (open: boolean) => {
    // if (
    //   event.type === "keydown" &&
    //   ((event as React.KeyboardEvent).key === "Tab" ||
    //     (event as React.KeyboardEvent).key === "Shift")
    // ) {
    //   return;
    // }
    setIsProfileDrawer(open);
  };

  return (
    <>
      {/* <div
        style={{
          position: "relative",
          backgroundColor: "#fff",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <main
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "1",
            textAlign: "left",
            fontSize: "1rem",
            color: "#191919",
            fontFamily: "'Noto Sans'",
          }}
        > */}
      <Box
        sx={{
          position: "relative",
          backgroundColor: "#fff",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: "1.5rem",
          }}
        >
          <ProfileCard
            onProfileClick={() => toggleDrawer(true)}
            openFeedbackModal={() => toggleFeedbackModal(true)}
          />
          <ProfileCard
            onProfileClick={() => toggleDrawer(true)}
            openFeedbackModal={() => toggleFeedbackModal(true)}
          />
          <ProfileCard
            onProfileClick={() => toggleDrawer(true)}
            openFeedbackModal={() => toggleFeedbackModal(true)}
          />
        </div>
      </Box>
      {/* </main>
      </div> */}
      <FeetbackModal
        // selectedValue={selectedValue}
        open={isFeedbackModal}
        onClose={() => toggleFeedbackModal(false)}
      />
      <Drawer
        anchor={"right"}
        open={isProfileDrawer}
        onClose={() => toggleDrawer(false)}
      >
        <ProfileDrawerContent
          openFeedbackModal={() => toggleFeedbackModal(true)}
        />
      </Drawer>
    </>
  );
};

export default Pipeline;
