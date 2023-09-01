import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
type Props = {
  rows?: number;
  label?: string;
  name?: string;
  value: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};
export default function Textarea({
  rows,
  label,
  name,
  value,
  handleChange,
}: Props) {
  const blue = {
    100: "#DAECFF",
    200: "#b6daff",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
  };

  const grey = {
    50: "#f6f8fa",
    100: "#eaeef2",
    200: "#d0d7de",
    300: "#afb8c1",
    400: "#8c959f",
    500: "#6e7781",
    600: "#57606a",
    700: "#424a53",
    800: "#32383f",
    900: "#24292f",
  };

  const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 100%;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${
      theme.palette.mode === "dark" ? grey[900] : grey[50]
    };
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: none;
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `
  );
  return (
    <Box width={"100%"}>
      {label && (
        <Typography
          component={"label"}
          color={grey[800]}
          htmlFor="textarea"
          variant="body2"
        >
          {label}
        </Typography>
      )}
      <StyledTextarea
        aria-label="textarea"
        name={name}
        value={value}
        minRows={rows || 3}
        placeholder="The candidate's skills do not fit the requirements..."
        onChange={handleChange}
      />
    </Box>
  );
}
