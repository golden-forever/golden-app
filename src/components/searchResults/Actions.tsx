import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import tickIcon from "../../assets/icons11.svg";
import eyeIcon from "../../assets/icons12.svg";
import Action from "./Action";
import { useAppSelector } from "../../hooks";
type ActionData = undefined | "save" | "hide";

const mockActions: { variant?: ActionData }[] = [
  { variant: "save" },
  { variant: "save" },
  { variant: "hide" },
  {},
];
const Actions: FunctionComponent = () => {
  const { actions } = useAppSelector(store => store.project);
  return (
    <>
      {actions.length > 0 && (
        <div
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            padding: "1.5rem 0rem 0rem",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "1.5rem",
            textAlign: "left",
            fontSize: "0.88rem",
            color: "#666",
            fontFamily: "'Noto Sans'",
          }}
        >
          {actions.map((action, i) => (
            <Action action={action} key={i} />
          ))}
        </div>
      )}
    </>
  );
};

export default Actions;
