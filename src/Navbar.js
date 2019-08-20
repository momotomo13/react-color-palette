import React, { Component } from "react";
import Slider, { Range } from "rc-slider";
import Select from "@material-ui/core/Select";
import { Link } from "react-router-dom";
import { MenuItem } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import "rc-slider/assets/index.css";
import "./Navbar.css";

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "hex",
      open: false
    };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  //Selectの選択項目を受け取りformatをupdate
  handleFormatChange(e) {
    this.setState({
      format: e.target.value,
      open: true
    });
    // stateを変更したあと親のhandlChangeを呼ぶ
    this.props.handleChange(e.target.value);
  }

  closeSnackbar() {
    this.setState({
      open: false
    });
  }

  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">Color Palette</Link>
        </div>
        <div className="slideer-container">
          <span> Level: {level} </span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className="select-container">
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex"> HEX - #FFFFFF </MenuItem>
            <MenuItem value="rgb"> RGB - rgb(255, 255, 255) </MenuItem>
            <MenuItem value="rgba"> RGBA - rgb(255, 255, 255, 1.0) </MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={this.state.open}
          autoHideDuration={3000}
          message={
            <span className="message-id">
              カラーフォーマットが {this.state.format} に変更されました!
            </span>
          }
          ContentProps={{ "aria-describedby": "message-id" }}
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color="inherit"
              key="close"
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </header>
    );
  }
}
