const styles = {
  root: {
    width: "20%",
    //single color paletteの高さをダイナミックに振り分け
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    marginBottom: "-3.5px",
    "&:hover svg": {
      color: "white",
      transform: "scale(1.5)"
    }
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "rgba(0,0,0,0.5)",
    letterSpacing: "1.4px",
    textTransform: "uppercase",
    fontSize: ".7rem",
    display: "flex",
    justifyContent: "space-between"
  },
  deleteIcon: {
    transition: "all .3s ease-in-out"
  }
};

export default styles;
