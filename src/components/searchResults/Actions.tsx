import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import tickIcon from "../../assets/icons11.svg";
import eyeIcon from "../../assets/icons12.svg";
import Action from "./Action";
type ActionData = undefined | "save" | "hide";

const mockActions: { variant?: ActionData }[] = [
  { variant: "save" },
  { variant: "save" },
  { variant: "hide" },
  {},
];
const Actions: FunctionComponent = () => {
  const onDanielChoenSavedClick = useCallback(() => {
    // Please sync "Pipeline(My candidates)" to the project
  }, []);

  const onDanielChoenSaved1Click = useCallback(() => {
    // Please sync "Pipeline(My candidates)" to the project
  }, []);

  return (
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
      {mockActions.map((action, i) => (
        <Action variant={action.variant} handleCancel={() => {}} />
      ))}
    </div>
  );
};

export default Actions;
