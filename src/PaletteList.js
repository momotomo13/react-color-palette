import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles";
import { withStyles } from "@material-ui/styles";

class PaletteList extends Component {
  //historyを使い個別のpaletteへ
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes, classes } = this.props;

    const paletteList = palettes.map(palette => (
      <MiniPalette
        {...palette}
        handleClick={() => this.goToPalette(palette.id)}
        key={palette.id}
      />
    ));

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React colors</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <div className={classes.palettes}>{paletteList}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
