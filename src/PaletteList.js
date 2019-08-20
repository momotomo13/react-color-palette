import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class PaletteList extends Component {
  render() {
    const { palettes } = this.props;

    const paletteList = palettes.map(palette => (
      <Link to={`palette/${palette.id}/`}>
        <h1>{palette.paletteName}</h1>
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
