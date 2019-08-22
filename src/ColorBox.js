import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import chroma from "chroma-js";
import "./ColorBox.css";

export default class ColorBox extends Component {
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
    const { name, color, moreUrl, showLink } = this.props;
    const { copied } = this.state;
    // 背景色が暗いときは文字色を白色にするため
    const isDarkColor = chroma(color).luminance() <= 0.08;
    // 背景色が明るいときは文字色を黒色にするため
    const isLightColor = chroma(color).luminance() >= 0.6;

    return (
      // textに設定されてるものをclipboardに設定
      <CopyToClipboard text={color} onCopy={this.changeCopyState}>
        <div style={{ background: color }} className="ColorBox">
          <div
            style={{ background: color }}
            className={`copy-overlay ${copied && "show"}`}
          />
          <div className={`copy-msg ${copied && "show"}`}>
            <h1 className={isLightColor && "dark-text"}>Copied</h1>
            <p className={isLightColor && "dark-text"}>{color}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isDarkColor && "light-text"}>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          {/* transitionをつけた際にcopyアニメーションをstopするためにstopPropagation追加 */}
          {showLink && (
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className={`see-more ${isLightColor && "dark-text"}`}>
                MORE
              </span>
            </Link>
          )}
        </div>
      </CopyToClipboard>
    );
  }
}
