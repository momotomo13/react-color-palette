import chroma from "chroma-js";
import sizes from "./sizes";

export default {
  ColorBox: {
    width: "20%",
    //single color paletteの高さをダイナミックに振り分け
    height: props => (props.showingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-3.5px",
    "&:hover button": {
      opacity: 1
    },
    //media query
    [sizes.down("lg")]: {
      width: "25%",
      height: props => (props.showingFullPalette ? "20%" : "33.333%")
    },
    [sizes.down("md")]: {
      width: "50%",
      height: props => (props.showingFullPalette ? "10%" : "20%")
    },
    [sizes.down("xs")]: {
      width: "100%",
      height: props => (props.showingFullPalette ? "5%" : "10%")
    }
  },
  //明るさに応じて文字色を変える
  copyText: {
    color: props => (chroma(props.color).luminance() >= 0.7 ? "black" : "white")
  },
  copyName: {
    color: props =>
      chroma(props.color).luminance() >= 0.08 ? "white" : "black"
  },
  seeMore: {
    color: props =>
      chroma(props.color).luminance() >= 0.8 ? "black" : "white",
    background: "rgba(255, 255, 255, .3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "50px",
    height: "20px",
    fontSize: ".7rem",
    textAlign: "center",
    lineHeight: "20px",
    textTransform: "uppercase"
  },
  copyButton: {
    color: props =>
      chroma(props.color).luminance() >= 0.7 ? "black" : "white",
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
    opacity: 0
  },
  boxContent: {
    position: "absolute",
    left: "5px",
    bottom: "5px",
    color: "black",
    letterSpacing: "1.4px",
    fontSize: ".7rem"
  },
  copyOverlay: {
    opacity: 0,
    zIndex: 0,
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out"
  },
  showOverlay: {
    opacity: 1,
    transform: "scale(50)",
    zIndex: 10,
    position: "absolute"
  },
  copyMsg: {
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "2.6rem",
    transform: "scale(0.1)",
    opacity: 0,
    color: "white",
    "& h1": {
      fontWeight: "bold",
      textShadow: "2px 2px 40px rgba(0, 0, 0, .1)",
      width: "100%",
      textAlign: "center",
      marginBottom: 0,
      padding: "1rem",
      [sizes.down("xs")]: {
        fontSize: "4rem"
      }
    },
    "& p": {
      fontSize: ".9rem"
    }
  },
  showMessege: {
    opacity: 1,
    transform: "scale(1)",
    zIndex: 20,
    transition: "all 0.2s ease-in-out",
    transitionDelay: "0.3s"
  }
};
