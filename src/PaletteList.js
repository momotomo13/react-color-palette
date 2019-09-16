import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyles";
import { withStyles } from "@material-ui/styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";
class PaletteList extends Component {
  //historyを使い個別のpaletteへ
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  render() {
    const { palettes, classes } = this.props;

    const paletteList = palettes.map(palette => (
      <CSSTransition key={palette.id} classNames="fade" timeout={500}>
        <MiniPalette
          {...palette}
          handleClick={() => this.goToPalette(palette.id)}
          handleDelete={this.props.deletePalette}
          key={palette.id}
          id={palette.id}
        />
      </CSSTransition>
    ));

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React colors</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <TransitionGroup className={classes.palettes}>
            {paletteList}
          </TransitionGroup>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
