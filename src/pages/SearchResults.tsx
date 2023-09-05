import { FunctionComponent, useState, useCallback } from "react";

import { Actions } from "../components/searchResults";

import {
  FeetbackModal,
  ProfileCard,
  ProfileDrawerContent,
} from "../components/common";
import { Drawer } from "@mui/material";
import { useAppSelector } from "../hooks";
import { ProfileCardSkeleton } from "../components/skeletons";

const SearchResults: FunctionComponent = () => {
  const [isProfileDrawer, setIsProfileDrawer] = useState(false);
  const [indexOfSelected, setIndexOfSelected] = useState<number>(0);
  const [selectedProf, setSelectedProf] = useState<null | ProfileData>(null);

  const [isFeedbackModal, setIsFeedbackModal] = useState(false);
  const { profiles } = useAppSelector(store => store.project);
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

  const handleSelect = (index: number) => {
    setIndexOfSelected(index);
    const newSelectedProf = profiles.at(index);
    setSelectedProf(newSelectedProf || null);
  };
  const handlePagination = (page: Page) => {
    let newIndexOfSelected = indexOfSelected;
    if (page === "next") {
      newIndexOfSelected += 1;
    } else {
      newIndexOfSelected -= 1;
    }
    if (newIndexOfSelected < 0) {
      return;
    }
    if (newIndexOfSelected > profiles.length - 1) {
      return setIsProfileDrawer(false);
    }
    handleSelect(newIndexOfSelected);
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
                key={i}
                onProfileClick={() => toggleDrawer(true)}
                openFeedbackModal={() => toggleFeedbackModal(true)}
                handleSelect={() => {
                  handleSelect(i);
                }}
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
        sx={{
          "& .MuiPaper-root": {
            borderRadius: {
              xs: "0",
              md: "8px 0 0 8px",
              // width: { xs: "100%", md: "95%" },
            },
          },
        }}
        open={isProfileDrawer}
        onClose={() => toggleDrawer(false)}
      >
        {selectedProf !== null && (
          <ProfileDrawerContent
            data={selectedProf}
            indexOfSelected={indexOfSelected}
            indexOfLast={profiles.length}
            handlePagination={handlePagination}
            openFeedbackModal={() => toggleFeedbackModal(true)}
          />
        )}
      </Drawer>
    </>
  );
};

export default SearchResults;
