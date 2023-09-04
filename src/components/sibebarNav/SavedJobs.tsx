import {
  Box,
  Divider,
  Button,
  Chip,
  Stack,
  Typography,
  Collapse,
} from "@mui/material";
import NavLink from "./NavLink";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setIsShowGoodPipeline } from "../../features/project/projectSlice";
import { setIsMobileSidebar } from "../../features/user/userSlice";
import { FilterListOff, FilterList } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

type Props = { toggleMobileSidebar: () => void };
const SavedJobs = ({ toggleMobileSidebar }: Props) => {
  const { pipelineTotal, pipeline_good, pipeline_maybe, isShowGoodPipeline } =
    useAppSelector(store => store.project);
  const dispatch = useAppDispatch();
  const handleClick = (isShowGood: boolean) => {
    dispatch(setIsShowGoodPipeline(isShowGood));
    dispatch(setIsMobileSidebar(false));
  };
  const { isMobileSidebar } = useAppSelector(state => state.user);

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
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
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
  const toggleSideBar = () => {
    dispatch(setIsMobileSidebar(!isMobileSidebar));
  };
  return (
    <>
      <Box
        sx={{
          display: { xs: "flex", lg: "none" },
          alignItems: "center",
          justifyContent: "start",
          width: "100%",
          p: { xs: "14px 16px 12px 16px", lg: "0 28px" },
          borderBottom: "1px solid",
          borderColor: "secondary.light",
        }}
      >
        <Button
          // startIcon={<FilterListOff fontSize="small" />}
          onClick={toggleSideBar}
          size="small"
          sx={{
            p: "0",
            color: "secondary.darker",
            fontSize: "16px",
            fontWeight: "500",
            ":hover": { background: "none" },
          }}
        >
          {isMobileSidebar ? (
            <FilterListOff fontSize="medium" sx={{ marginRight: "8px" }} />
          ) : (
            <FilterList fontSize="medium" sx={{ marginRight: "8px" }} />
          )}
          Filters
        </Button>
      </Box>
      <Collapse in={isDesktop || isMobileSidebar}>
        <Box
          sx={{
            marginTop: "24px",
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
            <Typography variant="h4" fontSize={"20px"}>
              Total saved
            </Typography>
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
                  fontSize: "16px",
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
                  sx={{ height: "26px", width: "44px", fontSize: "14px" }}
                  color={option.isActive ? "primary" : "default"}
                />
              </Button>
            ))}
          </div>
        </Box>
      </Collapse>
    </>
  );
};
export default SavedJobs;
