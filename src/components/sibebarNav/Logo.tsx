import { Typography } from "@mui/material";
import logo from "../../assets/icon5@2x.png";
type Props = {
  image: string | undefined;
  company: string | undefined;
};
const Logo = ({ image, company }: Props) => {
  return (
    <div
      style={{
        flex: "1",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "0.5rem",
      }}
    >
      <img
        style={{
          borderRadius: "2px",
          width: "2rem",
          height: "2rem",
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
