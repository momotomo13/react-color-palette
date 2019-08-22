import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

const styles = {
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
      borderRadius: "10px"
    }
  }
};

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shade = this.gatherShades(this.props.palette, this.props.colorId);
    console.log(this._shade);
    this.state = {
      format: "hex"
    };
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;
    console.log(allColors);
    // paletteから同じ色のオブジェクトの配列を生成
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    //50の明るさは#fffなので配列からカットする
    return shades.slice(1);
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { classes } = this.props;
    const colorBoxes = this._shade.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        color={color[this.state.format]}
        showingFullPalette={false}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className={classes.colors}>
          {colorBoxes}
          <div className={classes.goBack}>
            <Link
              to={`/palette/${this.props.palette.id}`}
              className={classes.goBack}
            >
              Go Back
            </Link>
          </div>
        </div>
        <PaletteFooter
          paletteName={this.props.palette.paletteName}
          emoji={this.props.palette.emoji}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
