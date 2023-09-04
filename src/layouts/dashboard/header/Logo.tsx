import PropTypes from "prop-types";
import { forwardRef } from "react";
import { Link as RouterLink } from "react-router-dom";
// @mui
import { useTheme } from "@mui/material/styles";
import { Box, Link } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import logoImg from "../../../assets/image2@2x.png";
// ----------------------------------------------------------------------

type Props = { disabledLink?: boolean | null | undefined; sx?: SxProps<Theme> };

const Logo = forwardRef(({ disabledLink = false, sx }: Props) => {
  const logo = (
    <Box
      component="img"
      src={logoImg}
      sx={{
        width: { xs: "1.75rem", lg: "2.75rem" },
        height: { xs: "1.75rem", lg: "2.75rem" },
        cursor: "pointer",
        ...sx,
      }}
    />
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return (
    <Link to="/" component={RouterLink} sx={{ display: "contents" }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
};

export default Logo;
