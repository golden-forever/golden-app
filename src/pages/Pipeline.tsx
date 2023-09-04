import { FunctionComponent, useState, useCallback, useEffect } from "react";

import {
  FeetbackModal,
  ProfileCard,
  ProfileDrawerContent,
} from "../components/common";
import { useAppSelector } from "../hooks";

import { Box, Drawer } from "@mui/material";

import { profiles } from "../_mock/profiles";

const Pipeline: FunctionComponent = () => {
  const [isProfileDrawer, setIsProfileDrawer] = useState(false);
  const [indexOfSelected, setIndexOfSelected] = useState<number>(0);

  const [selectedProf, setSelectedProf] = useState<null | ProfileData>(null);
  const { pipeline_good, pipeline_maybe, isShowGoodPipeline } = useAppSelector(
    store => store.project
  );
  const [profiles, setProfiles] = useState(
    isShowGoodPipeline ? pipeline_good : pipeline_maybe
  );
  const [isFeedbackModal, setIsFeedbackModal] = useState(false);
  useEffect(() => {
    setProfiles(isShowGoodPipeline ? pipeline_good : pipeline_maybe);
  }, [isShowGoodPipeline, pipeline_good, pipeline_maybe]);

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
    if (newIndexOfSelected < 0 || newIndexOfSelected > profiles.length - 1) {
      return;
    }
    handleSelect(newIndexOfSelected);
  };
  return (
    <>
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

export default Pipeline;
