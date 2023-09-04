import { Box, Typography } from "@mui/material";
import logo from "../../assets/icon5@2x.png";
type Props = {
  image: string | undefined;
  company: string | undefined;
};
const Logo = ({ image, company }: Props) => {
  return (
    <div
      style={{
        // flex: "1",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "0.5rem",
      }}
    >
      <Box
        component={"img"}
        sx={{
          borderRadius: "2px",
          width: { xs: "1.75rem", lg: "2rem" },
          height: { xs: "1.75rem", lg: "2rem" },
          objectFit: "cover",
        }}
        alt=""
        src={image ? image : logo}
      />
      <Typography variant="h4">{company}</Typography>
    </div>
  );
};
export default Logo;
