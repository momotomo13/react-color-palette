import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";

export default class PaletteList extends Component {
  render() {
    const { palettes } = this.props;

    const paletteList = palettes.map(palette => (
      <Link to={`palette/${palette.id}/`}>
        <MiniPalette {...palette} />
      </Link>
    ));

    return (
      <div>
        <h1>aaaaaaaaaaa</h1>
        {paletteList}
      </div>
    );
  }
}
