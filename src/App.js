import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";

export default class App extends Component {
  //seedColorからidがmatchするパレットを返す
  findPalette(id) {
    return seedColors.find(palette => {
      return palette.id === id;
    });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList palettes={seedColors} {...routeProps} />
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

        <Route
          path="/palette/:paletteId/:colorId"
          render={() => <SingleColorPalette />}
        />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[3])} />
      // </div>
    );
  }
}
