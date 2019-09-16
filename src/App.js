import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import { palette } from "@material-ui/system";

export default class App extends Component {
  constructor(props) {
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state = { palette: savedPalettes || seedColors };
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
    this.syncLocalStorage = this.syncLocalStorage.bind(this);
    this.deletePalette = this.deletePalette.bind(this);
  }

  //seedColorからidがmatchするパレットを返す
  findPalette(id) {
    return this.state.palette.find(palette => {
      return palette.id === id;
    });
  }

  deletePalette(id) {
    this.setState(
      st => ({ palette: st.palette.filter(p => p.id !== id) }),
      this.syncLocalStorage
    );
  }
  savePalette(newPalette) {
    this.setState(
      { palette: [...this.state.palette, newPalette] },
      this.syncLocalStorage
    );
  }

  syncLocalStorage() {
    //local storageにパレットを保存
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palette));
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/palette/new/"
          render={routeProps => (
            <NewPaletteForm
              savePalette={this.savePalette}
              palette={this.state.palette}
              {...routeProps}
            />
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
            <PaletteList
              palettes={this.state.palette}
              deletePalette={this.deletePalette}
              {...routeProps}
            />
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
