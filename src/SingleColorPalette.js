import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import { Link } from "react-router-dom";

export default class SingleColorPalette extends Component {
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
    const colorBoxes = this._shade.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        color={color[this.state.format]}
        showingFullPalette={false}
      />
    ));
    return (
      <div className="SingleColorPalette Palette">
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className="Palette-colors">
          {colorBoxes}
          <div className="go-back ColorBox">
            <Link
              to={`/palette/${this.props.palette.id}`}
              className="back-button"
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
