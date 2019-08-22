import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import styles from "./styles/ColorBoxStyles";
import { withStyles } from "@material-ui/styles";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    // copyされたら1500msで表示、非表示の切り替え
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    // this.propsを省略
    const { name, color, moreUrl, showingFullPalette, classes } = this.props;
    const { copied } = this.state;

    return (
      // textに設定されてるものをclipboardに設定
      <CopyToClipboard text={color} onCopy={this.changeCopyState}>
        <div style={{ background: color }} className={classes.ColorBox}>
          <div
            style={{ background: color }}
            className={`${classes.copyOverlay} ${copied &&
              classes.showOverlay}`}
          />
          <div
            className={`${classes.copyMsg} ${copied && classes.showMessege}`}
          >
            <h1>Copied</h1>
            <p className={classes.copyText}>{color}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {/* transitionをつけた際にcopyアニメーションをstopするためにstopPropagation追加 */}
          {showingFullPalette && (
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className={classes.seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
