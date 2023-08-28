import { FunctionComponent, useState, useCallback } from "react";
import ModalFeetback from "../components/locofy/ModalFeetback";
import PortalPopup from "../components/locofy/PortalPopup";

import { Actions } from "../components/searchResults";
import ProfileSlideover from "../components/locofy/ProfileSlideover";
import {
  FeetbackModal,
  ProfileCard,
  ProfileDrawerContent,
} from "../components/common";
import { Drawer } from "@mui/material";

const SearchResults: FunctionComponent = () => {
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
      <div
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
            gap: "0.63rem",
            zIndex: "1",
            textAlign: "left",
            fontSize: "1rem",
            color: "#191919",
            fontFamily: "'Noto Sans'",
          }}
        >
          <Actions />
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
        </main>
      </div>
      <FeetbackModal
        // selectedValue={selectedValue}
        open={isFeedbackModal}
        onClose={() => toggleFeedbackModal(false)}
      />
      {/* {isModalFeetbackPopupOpen && (
        <PortalPopup
          overlayColor="rgba(13, 21, 32, 0.3)"
          placement="Centered"
          onOutsideClick={closeModalFeetbackPopup}
        >
          <ModalFeetback onClose={closeModalFeetbackPopup} />
        </PortalPopup>
      )} */}

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

export default SearchResults;
