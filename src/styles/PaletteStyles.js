import sizes from "./sizes";

export default {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  },
  colors: {
    height: "90%"
  },
  goBack: {
    width: "20%",
    //single color paletteの高さをダイナミックに振り分け
    height: "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-3.5px",
    opacity: 1,
    backgroundColor: "#333",
    "& a": {
      color: "white",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, .3)",
      fontSize: ".9rem",
      lineHeight: "30px",
      textTransform: "uppercase",
      border: "none",
      borderRadius: "10px",
      textDecoration: "none"
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "33.333%"
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "20%"
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: "10%"
    }
  }
};
