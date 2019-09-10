import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { palette: seedColors };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }

  //seedColorからidがmatchするパレットを返す
  findPalette(id) {
    return this.state.palette.find(palette => {
      return palette.id === id;
    });
  }

  savePalette(newPalette) {
    this.setState({ palette: [...this.state.palette, newPalette] });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/new/"
          render={routeProps => (
            <NewPaletteForm savePalette={this.savePalette} {...routeProps} />
          )}
        />
        <Route
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList palettes={this.state.palette} {...routeProps} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            //findPaletteでidにマッチするパレットを変換後generatePaletteでshade付きのパレットを生成し、Paletteコンポーネントに渡す
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[3])} />
      // </div>
    );
  }
}
