import { FunctionComponent, useState, useCallback } from "react";

import { Actions } from "../components/searchResults";

import {
  FeetbackModal,
  ProfileCard,
  ProfileDrawerContent,
} from "../components/common";
import { Drawer } from "@mui/material";
import { profiles } from "../_mock/profiles";

const SearchResults: FunctionComponent = () => {
  const [isProfileDrawer, setIsProfileDrawer] = useState(false);
  const [selectedProf, setSelectedProf] = useState<null | ProfileData>(null);
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

  const handleSelect = (data: ProfileData) => {
    setSelectedProf(data);
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
            {profiles.map((profile, i) => (
              <ProfileCard
                onProfileClick={() => toggleDrawer(true)}
                openFeedbackModal={() => toggleFeedbackModal(true)}
                handleSelect={handleSelect}
                data={profile}
              />
            ))}
          </div>
        </main>
      </div>
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
        {selectedProf !== null && (
          <ProfileDrawerContent
            data={selectedProf}
            openFeedbackModal={() => toggleFeedbackModal(true)}
          />
        )}
      </Drawer>
    </>
  );
};

export default SearchResults;
