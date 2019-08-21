import React, { Component } from "react";
import ColorBox from "./ColorBox";

export default class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shade = this.gatherShades(this.props.palette, this.props.colorId);
    console.log(this._shade);
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

  render() {
    const colorBoxes = this._shade.map(color => (
      <ColorBox
        key={color.id}
        name={color.name}
        color={color.hex}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <h1>Single Color Palette</h1>
        <div className="Palette-colors">{colorBoxes}</div>
      </div>
    );
  }
}
