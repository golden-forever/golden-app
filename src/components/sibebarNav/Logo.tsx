import logo from "../../assets/icon5@2x.png";
type Props = {};
const Logo = (props: Props) => {
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
        src={logo}
      />
      <div style={{ flex: "1", position: "relative", fontWeight: "600" }}>
        Techify
      </div>
    </div>
  );
};
export default Logo;
