import { Box, Divider, Button, Chip, Stack, Typography } from "@mui/material";
import NavLink from "./NavLink";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setIsShowGoodPipeline } from "../../features/project/projectSlice";

type Props = {};
const SavedJobs = (props: Props) => {
  const { pipelineTotal, pipeline_good, pipeline_maybe, isShowGoodPipeline } =
    useAppSelector(store => store.project);
  const dispatch = useAppDispatch();
  const handleClick = (isShowGood: boolean) => {
    dispatch(setIsShowGoodPipeline(isShowGood));
  };

  const initialConfig = [
    {
      label: "Good Leads",
      amount: pipeline_good.length,
      handleClick: () => handleClick(true),
      isActive: isShowGoodPipeline === true,
    },
    {
      label: "Not Sure Leads",
      amount: pipeline_maybe.length,
      handleClick: () => handleClick(false),
      isActive: isShowGoodPipeline === false,
    },
  ];
  const [selected, setSelected] = useState(initialConfig[0]);
  const [config, setConfig] = useState(initialConfig);
  useEffect(() => {
    setConfig([
      {
        label: "Good Leads",
        amount: pipeline_good.length,
        handleClick: () => handleClick(true),

        isActive: isShowGoodPipeline === true,
      },
      {
        label: "Not Sure Leads",
        amount: pipeline_maybe.length,
        handleClick: () => handleClick(false),
        isActive: isShowGoodPipeline === false,
      },
    ]);
  }, [pipeline_good, pipeline_maybe, isShowGoodPipeline]);

  return (
    <>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "24px",
          fontSize: "1rem",
        }}
      >
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"100%"}
          p={"0 16px 0 28px"}
        >
          <Typography variant="h4">Total saved</Typography>
          <Typography variant="body1">{pipelineTotal}</Typography>
        </Stack>

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
          {config.map((option, i) => (
            <Button
              variant="text"
              onClick={option.handleClick}
              className={option.isActive ? "active" : ""}
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

                "&.active": {
                  color: "primary.main",
                  "::after": {
                    opacity: 1,
                  },
                },
                ":hover": {
                  background: "transparent",
                  "& .MuiChip-root": { opacity: 1 },
                  "::after": {
                    opacity: 1,
                  },
                },
              }}
            >
              {option.label}{" "}
              <Chip
                label={option.amount}
                color={option.isActive ? "primary" : "default"}
              />
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
export default SavedJobs;
